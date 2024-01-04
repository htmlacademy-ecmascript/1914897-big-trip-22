import { render } from '../render.js';
import EditForm from '../view/edit_form-view.js';
import CreateForm from '../view/create_form-view.js';
import ListView from '../view/list-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  createFormComponent = new CreateForm();
  listComponent = new ListView();

  constructor({container, pointModel}) {
    this.container = container;
    this.pointModel = pointModel;
  }

  init() {
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations();
    const offers = this.pointModel.getOffers();

    render(this.sortComponent, this.container);
    render(this.listComponent, this.container);
    render(new EditForm(), this.listComponent.getElement());

    for (const point of points) {
      render (new PointView(point, destinations, offers), this.listComponent.getElement());
    }
  }
}
