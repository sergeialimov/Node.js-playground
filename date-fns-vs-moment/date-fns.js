// moment
import moment from 'moment';

const now = moment.utc(); // Moment<2022-05-11T13:45:37Z>
const scheduleTime = now.clone(); // Moment<2022-05-11T13:45:37Z>

// console.log('m1', now); 
// console.log('m2', scheduleTime);
// console.log('m3', scheduleTime.hour(1));
// console.log('m4', scheduleTime.hour(14));
// console.log('m5', scheduleTime.minute(11));
// console.log('m6', scheduleTime.second(22));

// console.log(now.isSameOrAfter(scheduleTime));
console.log('\t\t')

import { setHours, getHours, setMinutes, setSeconds } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz/esm';

const zoned = zonedTimeToUtc(new Date());
const date = new Date();
const setHour = setHours(date, 3);
const zoned2 = zonedTimeToUtc(setHour)

console.log('d1', zoned)
console.log('d2', zoned2)
