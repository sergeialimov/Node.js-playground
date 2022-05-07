import fs from 'fs';
import readline from 'readline';
import parseline from './parseline.js';
import { fileURLToPath } from 'url';

const rs = fs.createReadStream('allCountries.txt');
const rl = readline.createInterface({ input: rs });
const __filename = fileURLToPath(import.meta.url);

(async () => {
  console.time(__filename);
  for await (const line of rl) {
    parseline(line);
  }
  console.timeEnd(__filename);
})();
