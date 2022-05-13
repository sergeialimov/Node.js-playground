import moment from 'moment';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);


const timestamp = moment.utc().toDate();

const now = dayjs.utc().toDate();
console.log(timestamp);
console.log(now);