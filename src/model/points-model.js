import { points } from '../mock/points.js';
import { offers } from '../mock/offers.js';
import { destinations } from '../mock/destinations.js';

export default class PointModel {
  #points = [];
  #offers = [];
  #destinations = [];

  init() {
    this.#points = points;
    this.#offers = offers;
    this.#destinations = destinations;
  }

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}

