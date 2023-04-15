import { format } from 'date-fns';
import _ from 'lodash';

import { ChecklistDTO } from '../dto/ChecklistDTO';

export default function formatDate(date: string) {
  const dateFormated = format(new Date(date), 'dd/MM/yyyy - HH:mm:ss');

  return dateFormated;
}

export function returnOddObjectFromTwoArrays(
  array1: ChecklistDTO[],
  array2: ChecklistDTO[],
) {
  return _.differenceWith(array1, array2, _.isEqual);
}