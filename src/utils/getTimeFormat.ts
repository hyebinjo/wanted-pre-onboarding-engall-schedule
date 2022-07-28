import { TimeRange } from '../interfaces/types';

const getTimeFormat = (timeObj: Date): string => {
  const ampm = timeObj.getHours() < 12 ? 'AM' : 'PM';
  const hour = () => {
    let hour: number | string;
    if (ampm === 'AM') hour = timeObj.getHours();
    else if (timeObj.getHours() === 12) hour = 12;
    else hour = timeObj.getHours() - 12;
    return hour.toString().length === 1 ? `0${hour}` : hour;
  };
  const min = timeObj.getMinutes().toString().length === 1 ? `0${timeObj.getMinutes()}` : timeObj.getMinutes();
  return `${hour()}:${min} ${ampm}`;
};

const getEndTimeFormat = (startTimeObj: Date): string => {
  const endTime = startTimeObj;
  endTime.setMinutes(endTime.getMinutes() + 40);
  return getTimeFormat(endTime);
};

export const getStartEndTimeObj = (startTimeObj: Date): TimeRange => {
  return { start: getTimeFormat(startTimeObj), end: getEndTimeFormat(startTimeObj) };
};
