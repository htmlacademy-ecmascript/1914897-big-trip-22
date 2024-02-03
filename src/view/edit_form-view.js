import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { DateFormats, TRAVEL_TYPES, CancelButtonNames } from '../const.js';
import { formatDate } from '../utils/utils.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function createTypeListTemplate(pointType, pointId) {
  return TRAVEL_TYPES.map((type) => {
    const checked = type === pointType ? 'checked' : '';
    return (
      `<div class="event__type-item">
      <input id="event-type-${type}-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${checked}>
        <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-${pointId}">${type}</label>
</div>`
    );
  }).join('');
}

function createOffersListTemplate(pointOffers, checkedOffers) {
  return pointOffers.map((offer) => {
    const checked = checkedOffers.includes(offer.id) ? 'checked' : '';
    return (
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-${offer.id}" data-offer-id="${offer.id}" type="checkbox" name="event-offer-luggage" ${checked}>
        <label class="event__offer-label" for="event-offer-luggage-${offer.id}">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>`
    );
  }).join('');
}


function createOffersSectionTemplate(pointOffers, checkedOffers) {
  return (
    `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
        ${createOffersListTemplate(pointOffers, checkedOffers)}
      </div>
    </section>`
  );
}

function createDestinationTemplate(pointDestination) {
  return (
    pointDestination.description || pointDestination.pictures.length ?
      `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      ${pointDestination.description ? `<p class="event__destination-description">${pointDestination.description}</p>` : ''}
      ${pointDestination.pictures.length ? `<div class="event__photos-container">
        <div class="event__photos-tape">
          ${pointDestination.pictures.map((picture) => `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`)}
        </div>
      </div>` : ''}
    </section>` : ''
  );
}

function createEditFormTemplate(point, destinations, offers) {
  const {
    id: pointId = 0,
    basePrice = '',
    dateFrom = formatDate(new Date(), DateFormats.DAY_TIME),
    dateTo = formatDate(new Date(), DateFormats.DAY_TIME),
    offers: checkedOffers = [],
    type = TRAVEL_TYPES[0]
  } = point;
  const pointOffers = [...offers.find((offer) => offer.type === type).offers];
  const pointDestination = destinations.find((dest) => dest.id === point.destination);


  return `
  <li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-${pointId}">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${pointId}" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${createTypeListTemplate(type, pointId)}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-${pointId}">
        ${type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-${pointId}" type="text" name="event-destination" value="${pointDestination ? pointDestination.name : ''}" list="destination-list-${pointId}">
      <datalist id="destination-list-${pointId}">
        ${destinations.map((item) => `<option value = "${item.name}" data-destination = ${item.id}></option>`).join('')}
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${formatDate(dateFrom, DateFormats.DAY_TIME)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${formatDate(dateTo, DateFormats.DAY_TIME)}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-${pointId}">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-${pointId}" type="number" min="0" step="1" name="event-price" value="${basePrice}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">${pointId === 0 ? CancelButtonNames.CANCEL : CancelButtonNames.DELETE}</button>
    <${pointId !== 0 ? `<button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>` : ''}
  </header>
  <section class="event__details">
  ${pointOffers.length ? createOffersSectionTemplate(pointOffers, checkedOffers) : ''}
  ${pointDestination ? createDestinationTemplate(pointDestination) : ''}
  </section>
</form>
</li>`;
}

export default class EditForm extends AbstractStatefulView {
  #point = [];
  #offers = [];
  #destinations = [];
  #handleButtonClick = null;
  #handleFormSubmit = null;
  #datepickerFrom = null;
  #datepickerTo = null;

  constructor({ point, destinations, offers, onButtonClick, onFormSubmit }) {
    super();
    this._setState(EditForm.parsePointToState(point));
    this.#offers = offers;
    this.#destinations = destinations;
    this.#handleButtonClick = onButtonClick;
    this.#handleFormSubmit = onFormSubmit;
    this._restoreHandlers();
  }

  get template() {
    return createEditFormTemplate(this._state, this.#destinations, this.#offers);
  }

  removeElement() {
    super.removeElement();

    if (this.#datepickerFrom) {
      this.#datepickerFrom.destroy();
      this.#datepickerFrom = null;
    }

    if (this.#datepickerTo) {
      this.#datepickerTo.destroy();
      this.#datepickerTo = null;
    }
  }

  reset(point) {
    this.updateElement(EditForm.parsePointToState(point));
  }

  _restoreHandlers() {
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickButtonHandler);
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__type-group').addEventListener('click', this.#onTripTypeClick);
    this.element.querySelector('.event__input--destination').addEventListener('input', this.#onDestinationInput);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#onPriceInput);
    this.element.querySelector('.event__available-offers').addEventListener('click', this.#onOffersClick);
    this.#setDatepicker();
  }

  #clickButtonHandler = (evt) => {
    evt.preventDefault();
    this.#handleButtonClick();
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditForm.parseStateToPoint(this._state));
  };

  #onTripTypeClick = (evt) => {
    if (evt.target.classList.contains('event__type-input')) {
      this.updateElement({ type: evt.target.value, offers: [] });
    }
  };

  #onDestinationInput = (evt) => {
    const destination = this.#destinations.find((item) => evt.currentTarget.value === item.name);
    this.updateElement({ destination: destination ? destination.id : '' });
    this.element.querySelectorAll('.event__offer-checkbox').forEach((element) => {
      if (this._state.offers.includes(element.dataset.offerId)) {
        element.checked = true;
      }
    });
  };

  #onPriceInput = (evt) => {
    this._setState({ basePrice: parseInt(evt.currentTarget.value, 10) });
  };

  #onOffersClick = (evt) => {
    if (evt.target.classList.contains('event__offer-checkbox')) {
      const items = [...this.element.querySelectorAll('.event__offer-checkbox:checked')];
      this._setState({
        offers: items.map((item) => parseInt(item.dataset.offerId, 10))
      });
    }
  };

  #onDateFromChange = ([userDate]) => {
    this.updateElement({
      dateFrom: userDate,
    });
    this.#datepickerTo.set.minDate = this._state.dateFrom;
  };

  #onDateToChange = ([userDate]) => {
    this.updateElement({
      dateTo: userDate,
    });
    this.#datepickerFrom.config.maxDate = this._state.dateTo;
  };

  #setDatepicker() {
    const commonConfig = {
      dateFormat: DateFormats.DATEPICKER,
      enableTime: true,
      'time_24hr': true,
      locale: {
        firstDayOfWeek: 1
      },
      disableMobile: 'true'
    };
    const formattedDateFrom = formatDate(this._state.dateFrom, DateFormats.DAY_TIME);
    const formattedDateTo = formatDate(this._state.dateTo, DateFormats.DAY_TIME);
    const [dateFromElement, dateToElement] = this.element.querySelectorAll('.event__input--time');

    this.#datepickerFrom = flatpickr(
      dateFromElement,
      {
        ...commonConfig,
        defaultDate: formattedDateFrom,
        onChange: this.#onDateFromChange,
        maxDate: formattedDateFrom
      },
    );
    this.#datepickerTo = flatpickr(
      dateToElement,
      {
        ...commonConfig,
        defaultDate: formattedDateTo,
        onChange: this.#onDateToChange,
        minDate: formattedDateTo,
      },
    );
  }

  static parsePointToState(point) {
    return { ...point };
  }

  static parseStateToPoint(state) {
    const point = { ...state };
    point.dateFrom = formatDate(state.dateFrom, DateFormats.BASIC);
    point.dateTo = formatDate(state.dateTo, DateFormats.BASIC);
    return point;
  }
}
