import { compareAsc, format } from 'date-fns';

const today = new Date()

const formattedDate = format(today, 'yyyy-MM-dd');

console.log(formattedDate);
console.log(today);
