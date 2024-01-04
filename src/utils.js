import dayjs from 'dayjs';
import { HoursInDay, MillisecondsInMinute, SecondsInMinute } from './const';

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function humanizeTaskDueDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

function getDifferenceTime(start, end) {
  const difference = dayjs(end).diff(start) / MillisecondsInMinute;

  switch (difference) {
    case difference < SecondsInMinute:
      return dayjs(difference).format('mm[M]');

    case difference > SecondsInMinute && difference < SecondsInMinute * HoursInDay:
      return dayjs(difference).format('HH[H] mm[M]');
    default:
      return dayjs(difference).format('DD[D] HH[H] mm[M]');
  }
}

export { getRandomNumber, humanizeTaskDueDate, getDifferenceTime };
