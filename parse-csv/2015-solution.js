import fs from 'fs';
import readline  from 'readline';
import parseline from './parseline.js';
import { fileURLToPath } from 'url';

const rs = fs.createReadStream('allCountries.txt');
const rl = readline.createInterface({ input: rs });

const __filename = fileURLToPath(import.meta.url);


console.time(__filename);

rl.on('line', (line) => {
  parseline(line);
})

rl.on('close', () => console.timeEnd(__filename));
