import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function formatDate(date, template) {
  if (date) {
    return dayjs(date).format(template);
  }
}
function getDatesDifference(dateFrom, dateTo) {
  return dayjs(dateTo).diff(dayjs(dateFrom));
}

function getDatesDuration(difference) {
  return dayjs.duration(difference);
}

function isFuture(dateFrom) {
  return dayjs().isBefore(dayjs(dateFrom));
}

function isPast(dateTo) {
  return dayjs().isAfter(dayjs(dateTo));
}

function isPresent(dateFrom, dateTo) {
  return dayjs().isAfter(dayjs(dateFrom)) && dayjs().isBefore(dayjs(dateTo));
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export { getRandomNumber, formatDate, getDatesDifference, getDatesDuration, isFuture, isPast, isPresent, updateItem };
