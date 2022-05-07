import fs from 'fs';
import parseline from '../parseline.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const rs = fs.createReadStream('allCountries.txt');

let t0 = 0, t1 = 0;

(async () => {
  console.time(__filename);
  let remainder = '';
  for await (const buf of rs) {
    const lines = (remainder + buf).split(/\r?\n/g);
    remainder = lines.pop();
    for (const line of lines) {
      const t = Date.now();
      parseline(line);
    }
  }
  console.timeEnd(__filename);

})();