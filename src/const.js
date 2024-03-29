const TRAVEL_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DateFormats = {
  DAY: 'DD',
  MONTH: 'MMM',
  MONTH_DAY: 'MMM DD',
  DAY_MONTH: 'DD MMM',
  TIME: 'HH:mm',
  DAY_TIME: 'DD/MM/YY HH:mm',
  DAYS: 'DD[D]',
  HOURS: 'HH[H]',
  MINUTES: 'mm[M]',
  BASIC: 'YYYY-MM-DDTHH:mm',
  DATEPICKER: 'd/m/y H:i',
};

const CancelButtonNames = {
  DELETE: 'Delete',
  CANCEL: 'Cancel'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer',
};

const DisabledSortTypes = ['event', 'offer'];

export { TRAVEL_TYPES, DateFormats, CancelButtonNames, FilterType, SortType, DisabledSortTypes};
