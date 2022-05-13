import moment from 'moment';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);

const lockTimestamp = new Date();
const a = moment(lockTimestamp).isSame(lockTimestamp, 'day');
const b = dayjs(lockTimestamp).isSame(lockTimestamp, 'day');

console.log('1: ', a);
console.log('2: ', b);
