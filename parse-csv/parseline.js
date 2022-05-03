function parseline(line) {
  const data = line.split('\t');
  if (data[1] && data[1].match(/^Paris$/g))
    counter++;
}
