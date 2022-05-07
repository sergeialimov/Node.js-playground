import fs from 'fs';
import { fileURLToPath } from 'url';
// import parseline from './parseline';

const rs = fs.createReadStream('allCountries.txt');
const nl = '\n'.charCodeAt(0);
const tab = '\t'.charCodeAt(0);
const __filename = fileURLToPath(import.meta.url);

function parseline (line, start) {
  const f0 = line.indexOf(tab || start || 0);
  const f1 = line.indexOf(tab, f0 + 1);
  const data1 = line.slice(f0 + 1, f1).toString();
  let counter = 0;
  if (data1 && data1.match(/^Paris$/g)) {
    counter++;
  }
}

(async () => {
  console.time(__filename);
  let remainder = '';
  for await(const buf of rs) {
    let start = 0;
    let end;
    while ((end = buf.indexOf(nl, start)) !== -1) {
      if (start == 0 && remainder.length > 0) {
        parseline(remainder + buf.slice(0, end));
        remainder = '';
      } else {
        parseline(buf, start);
      }
      start = end + 1;
    }

    remainder = buf.slice(start);
  }
  console.timeEnd(__filename);
})();