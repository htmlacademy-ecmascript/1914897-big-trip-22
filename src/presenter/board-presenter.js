import ListView from '../view/list-view.js';
import SortView from '../view/sort-view.js';
import InfoTripView from '../view/info_trip-view.js';
import FilterView from '../view/filter-view.js';
import EmptyView from '../view/empty-view.js';
import { render, RenderPosition } from '../framework/render.js';
import { generateFilter } from '../mock/filter.js';
import PointPresenter from './point-presenter.js';
import { updateItem, sortPointsPrice, sortPointsTime } from '../utils/utils.js';
import { SortType } from '../const.js';


export default class BoardPresenter {
  #tripInfoElement = document.querySelector('.trip-main');
  #filterElement = document.querySelector('.trip-controls__filters');
  #contentTripElement = document.querySelector('.trip-events');
  #listComponent = new ListView();
  #sortComponent = null;
  #pointModel = null;
  #points = [];
  #offers = [];
  #destinations = [];
  #filters = [];
  #currentSortType = SortType.DAY;
  #pointPresenters = new Map();
  #sourcedPoints = [];

  constructor({ pointModel }) {
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointModel.points];
    this.#destinations = [...this.#pointModel.destinations];
    this.#offers = [...this.#pointModel.offers];
    this.#filters = generateFilter(this.#points);
    this.#sourcedPoints = [...this.#pointModel.points]; // сохранил исходный массив

    render(new InfoTripView(), this.#tripInfoElement, RenderPosition.AFTERBEGIN);
    render(new FilterView({ filters: this.#filters }), this.#filterElement);
    this.#renderBoard();
  }

  #renderPoint(point, offers, destinations) {
    const pointPresenter = new PointPresenter({ listComponent: this.#listComponent, handlePointChange: this.#handlePointChange, handleModeChange: this.#handleModeChange });
    pointPresenter.init(point, offers, destinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderBoard() {
    if (this.#points.length) {
      this.#renderSort();
      this.#renderPointsList();
    } else {
      render(new EmptyView(), this.#contentTripElement);
    }
  }

  #renderSort() {
    this.#sortComponent = new SortView({ handleSortTypeChange: this.#handleSortTypeChange });
    render(this.#sortComponent, this.#contentTripElement);
  }

  #renderPointsList() {
    render(this.#listComponent, this.#contentTripElement);
    this.#points.forEach((point) => {
      this.#renderPoint(point, this.#offers, this.#destinations);
    });
  }


  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => {
      presenter.resetView();
    });
  };

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#sourcedPoints = updateItem(this.#sourcedPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, this.#offers, this.#destinations);
  };

  #clearList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #sortPoints(sortType) {
    switch (sortType) {
      case SortType.TIME:
        this.#points.sort(sortPointsTime);
        break;
      case SortType.PRICE:
        this.#points.sort(sortPointsPrice);
        break;
      default:
        this.#points = [...this.#sourcedPoints];
    }
    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortPoints(sortType);
    this.#clearList();
    this.#renderPointsList();
  };
}
