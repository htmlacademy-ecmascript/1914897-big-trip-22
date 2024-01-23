import { render, replace } from '../framework/render.js';
import PointView from '../view/point-view';
import EditForm from '../view/edit_form-view';

export default class PointPresenter {
  #listComponent = null;
  #pointComponent = null;
  #editComponent = null;
  #point = null;
  #offers = [];
  #destinations = [];

  constructor({ listComponent }) {
    this.#listComponent = listComponent;
  }

  init(point, offers, destinations) {
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;
    this.#pointComponent = new PointView({
      point: point, offers: this.#offers, destinations: this.#destinations, onButtonClick: () => {
        this.#replacePointToForm();
        document.addEventListener('keydown', this.#escKeyDownHandler);
      }
    });
    this.#editComponent = new EditForm({
      point: point, offers: this.#offers, destinations: this.#destinations,
      onButtonClick: () => {
        this.#replaceFormToPoint();
        document.removeEventListener('keydown', this.#escKeyDownHandler);
      },
      onFormSubmit: () => {
        this.#replaceFormToPoint();
        document.removeEventListener('keydown', this.#escKeyDownHandler);
      }
    });
    render(this.#pointComponent, this.#listComponent.element);
  }

  #escKeyDownHandler(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler());
    }
  }

  #replacePointToForm() {
    replace(this.#editComponent, this.#pointComponent);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editComponent);
  }
}

