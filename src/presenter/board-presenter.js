import ListView from '../view/list-view.js';
import SortView from '../view/sort-view.js';
import InfoTripView from '../view/info_trip-view.js';
import FilterView from '../view/filter-view.js';
import EmptyView from '../view/empty-view.js';
import { render, RenderPosition } from '../framework/render.js';
import { generateFilter } from '../mock/filter.js';
import { generateSort } from '../mock/sort.js';
import PointPresenter from './point-presenter.js';


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
  #sortItems = [];


  constructor({ pointModel }) {
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointModel.points];
    this.#destinations = [...this.#pointModel.destinations];
    this.#offers = [...this.#pointModel.offers];
    this.#filters = generateFilter(this.#points);
    this.#sortItems = generateSort(this.#points);


    render(new InfoTripView(), this.#tripInfoElement, RenderPosition.AFTERBEGIN);
    render(new FilterView({filters: this.#filters}), this.#filterElement);
    render(new SortView({sortItems: this.#sortItems}), this.#contentTripElement);
    this.#renderBoard();
  }

  #renderPoint(point, offers, destinations) {
    const pointPresenter = new PointPresenter({listComponent: this.#listComponent});
    pointPresenter.init(point, offers, destinations);
  }

  #renderBoard() {
    if (!this.#points.length) {
      render(new EmptyView(), this.#contentTripElement);
    }
    render(this.#listComponent, this.#contentTripElement);
    this.#points.forEach((point) => {
      this.#renderPoint(point, this.#offers, this.#destinations);
    });
  }
}
