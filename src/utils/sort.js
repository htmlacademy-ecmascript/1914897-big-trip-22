import { SortType } from '../const';
import { getDatesDifference } from './utils';

const sort = {
  [SortType.DAY]: (points) => points,
  [SortType.EVENT]: (points) => points,
  [SortType.TIME]: (points) => [...points].sort((point, nextPoint) => getDatesDifference(point.dateFrom, point.dateTo) - getDatesDifference(nextPoint.dateFrom, nextPoint.dateTo)),
  [SortType.PRICE]: (points) => [...points].sort((point, nextPoint) => nextPoint.basePrice - point.basePrice),
  [SortType.OFFER]: (points) => points,
};

export { sort };


