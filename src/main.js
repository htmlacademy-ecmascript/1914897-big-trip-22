import BoardPresenter from './presenter/board-presenter.js';
import PointModel from './model/points-model.js';

const pointModel = new PointModel();
pointModel.init();
const boardPresenter = new BoardPresenter({pointModel: pointModel});

boardPresenter.init();

