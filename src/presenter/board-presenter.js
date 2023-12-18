import { render } from '../render.js';
import EditForm from '../view/edit_form-view.js';
import CreateForm from '../view/create_form-view.js';
import ListView from '../view/list-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';

const LIMIT_POINT = 3;

export default class BoardPresenter {
  sortComponent = new SortView();
  createFormComponent = new CreateForm();
  listComponent = new ListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.sortComponent, this.container);
    render(this.listComponent, this.container);
    render(new EditForm(), this.listComponent.getElement());

    for (let i = 0; i < LIMIT_POINT; i++) {
      render (new PointView, this.listComponent.getElement());
    }
  }
}
