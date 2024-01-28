import { render, replace, remove } from '../framework/render.js';
import PointView from '../view/point-view';
import EditForm from '../view/edit_form-view';

const Mode = {
  DEFAULT: 'default',
  EDITING: 'editing',
};

export default class PointPresenter {
  #listComponent = null;
  #pointComponent = null;
  #editComponent = null;
  #point = null;
  #offers = [];
  #destinations = [];
  #handlePointChange = null;
  #handleModeChange = null;
  #mode = Mode.DEFAULT;

  constructor({ listComponent, handlePointChange, handleModeChange }) {
    this.#listComponent = listComponent;
    this.#handlePointChange = handlePointChange;
    this.#handleModeChange = handleModeChange;
  }

  init(point, offers, destinations) {
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;

    const prevPointComponent = this.#pointComponent;
    const prevEditComponent = this.#editComponent;

    this.#pointComponent = new PointView({
      point: point, offers: this.#offers, destinations: this.#destinations, onButtonClick: () => {
        this.#replacePointToForm();
        document.addEventListener('keydown', this.#escKeyDownHandler);
      },
      onFavoriteClick: () => {
        this.#handleFavoriteClick();
      }
    });
    this.#editComponent = new EditForm({
      point: point, offers: this.#offers, destinations: this.#destinations,
      onButtonClick: () => {
        this.#replaceFormToPoint();
      },
      onFormSubmit: () => {
        this.#handleFormSubmit(this.#point);
      }
    });

    if (prevPointComponent === null || prevEditComponent === null) {
      render(this.#pointComponent, this.#listComponent.element);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    } else if (this.#mode === Mode.EDITING) {
      replace(this.#editComponent, prevEditComponent);
    }

    remove(prevPointComponent);
    remove(prevEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#editComponent);
  }

  resetView() {
    if (this.#mode === Mode.EDITING) {
      this.#replaceFormToPoint();
    }
  }

  #replacePointToForm() {
    replace(this.#editComponent, this.#pointComponent);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #handleFavoriteClick() {
    this.#handlePointChange({ ...this.#point, isFavorite: !this.#point.isFavorite });
  }

  #handleFormSubmit(point) {
    this.#handlePointChange(point);
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };
}

