import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);

const date = new Date();

const ddate = dayjs(date);
const utcDate = dayjs.utc();
const uDH = utcDate.set('hour', 1);
console.log(utcDate);
console.log(uDH);