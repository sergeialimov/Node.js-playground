// moment
import moment from 'moment';

const now = moment.utc(); // Moment<2022-05-11T13:45:37Z>
const scheduleTime = now.clone(); // Moment<2022-05-11T13:45:37Z>

// console.log('1', now); 
console.log('2', scheduledTime);

console.log('3', scheduledTime.hour(1));
console.log('4', scheduledTime.hour(2));
// console.log(scheduledTime.minute(+minute));
// console.log(scheduledTime.second(+second));

// return now.isSameOrAfter(scheduleTime);

import { setHours } from 'date-fns/esm//fp';
// import fns from 'date-fns';

// const { setHours } = fns;
import { zonedTimeToUtc } from 'date-fns-tz/esm';

const zoned = zonedTimeToUtc(new Date());
console.log('utc 3', zoned);
console.log('utc 4', setHours(zoned, 2));
console.log('utc 5', setHours(zoned, 5));
