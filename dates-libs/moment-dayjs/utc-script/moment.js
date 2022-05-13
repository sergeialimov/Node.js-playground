import moment from 'moment';

const now = moment.utc();
const scheduleTime = now.clone();

scheduleTime.hour(1);
scheduleTime.minute(2);
scheduleTime.second(3);

now.isSameOrAfter(scheduleTime);