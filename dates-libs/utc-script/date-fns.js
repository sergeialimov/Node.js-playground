// import date-fns from 'date-fns';
import { setHours, getHours, setMinutes, setSeconds } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz/esm';

const zoned = zonedTimeToUtc(new Date());
const date = new Date();
const setHour = setHours(date, 3);
const zoned2 = zonedTimeToUtc(setHour)

console.log('d1', zoned)
console.log('d2', zoned2)
