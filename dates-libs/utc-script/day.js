import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js';

dayjs.extend(utc);
dayjs.extend(isSameOrAfter);

const now = dayjs.utc();

console.log(now);

const scheduleTime = now
  .set('hour', 23)
  .set('minute', 2)
  .set('second', 3)

console.log('scheduleTime', scheduleTime);
console.log(scheduleTime.isSameOrAfter(now));
