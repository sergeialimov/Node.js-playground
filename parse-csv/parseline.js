// function parseline(line) {
//   const data = line.split('\t');
//   if (data[1] && data[1].match(/^Paris$/g))
//     counter++;
// }
function parseline(line) {
const data = line.split('\t');
  let counter = 0;
    if (data[1] && data[1].match(/^Paris$/g)) {
      counter++;
    }
}

module.exports.parseline = parseline;