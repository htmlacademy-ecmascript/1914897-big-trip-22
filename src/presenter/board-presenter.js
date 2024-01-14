import EditForm from '../view/edit_form-view.js';
import ListView from '../view/list-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import InfoTripView from '../view/info_trip-view.js';
import FilterView from '../view/filter-view.js';
import EmptyView from '../view/empty-view.js';
import { render, RenderPosition, replace } from '../framework/render.js';
import { generateFilter } from '../mock/filter.js';


export default class BoardPresenter {
  #tripInfoElement = document.querySelector('.trip-main');
  #filterElement = document.querySelector('.trip-controls__filters');
  #contentTripElement = document.querySelector('.trip-events');
  #listComponent = new ListView();
  #pointModel = null;
  #points = [];
  #offers = [];
  #destinations = [];
  #filters = [];


  constructor({ pointModel }) {
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointModel.points];
    this.#destinations = [...this.#pointModel.destinations];
    this.#offers = [...this.#pointModel.offers];
    this.#filters = generateFilter(this.#points);


    render(new InfoTripView(), this.#tripInfoElement, RenderPosition.AFTERBEGIN);
    render(new FilterView({filters: this.#filters}), this.#filterElement);
    render(new SortView(), this.#contentTripElement);
    this.#renderBoard();
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point: point, offers: this.#offers, destinations: this.#destinations, onButtonClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const editComponent = new EditForm({
      point: point, offers: this.#offers, destinations: this.#destinations,
      onButtonClick: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onFormSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });


    function replacePointToForm() {
      replace(editComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, editComponent);
    }

    render(pointComponent, this.#listComponent.element);
  }


  #renderBoard() {
    if (!this.#points.length) {
      render(new EmptyView(), this.#contentTripElement);
    }
    render(this.#listComponent, this.#contentTripElement);
    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }
}
