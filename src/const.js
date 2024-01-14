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
  MINUTES: 'mm[M]'
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

export { TRAVEL_TYPES, DateFormats, CancelButtonNames, FilterType };
