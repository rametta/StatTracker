import moment from 'moment';

export const FormatDate = date => {
  if(date) return moment(date).format('ll');
  return date;
}

export const OutcomeStyle = outcome => {
  switch(outcome) {
    case 'W':
      return 'green';
    case 'L':
      return 'red';
    case 'T':
      return 'blue';
    default:
      return '';
  }
}

export const RatioStyle = ratio => {
  if(ratio > 1) return 'green';
  if(ratio < 1) return 'red';
  if(ratio === 1) return 'blue';
  return '';
}