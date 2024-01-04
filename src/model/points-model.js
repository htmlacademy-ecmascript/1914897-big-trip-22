import { points } from '../mock/points.js';
import { offers } from '../mock/offers.js';
import { destinations } from '../mock/destinations.js';

export default class PointModel {
  constructor() {
    this.points = [];
    this.offers = [];
    this.destinations = [];
  }

  init() {
    this.points = points;
    this.offers = offers;
    this.destinations = destinations;
  }

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  getDestinations() {
    return this.destinations;
  }
}

