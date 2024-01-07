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

export { getRandomNumber, formatDate, getDatesDifference, getDatesDuration };
