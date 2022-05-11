// moment
import moment from 'moment';

const momentDate = moment.utc();
console.log('utc 1', momentDate); // Moment<2022-05-06T14:41:06Z>

const timestamp = moment.utc().toDate();
console.log('utc 2', timestamp);


// date-fns
import { format, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz/esm';

const zoned = zonedTimeToUtc(new Date());
console.log('utc 3', zoned);