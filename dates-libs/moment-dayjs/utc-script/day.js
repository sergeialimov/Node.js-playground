import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js';

dayjs.extend(utc).extend(isSameOrAfter);

const now = dayjs.utc();


const scheduleTime = now
  .set('hour', 23)
  .set('minute', 2)
  .set('second', 3)

scheduleTime.isSameOrAfter(now);

console.log('scheduleTime', scheduleTime);
console.log(scheduleTime.isSameOrAfter(now));
