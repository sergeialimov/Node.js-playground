import http from 'http';

/** How many arguments does res.on('data')handler have given the following code?
 * 
 * The answer: One
 */

http.get('http://localhost:8081/test', (res) => {
  let rawData = '';

  // only one argument
  res.on('data', (chunk) => {
    rawData += chunk;
  });

  res.on('end', () => {
    try {
      const data = JSON.parse(rawData);

      console.log(data.data);
    } catch (err) {
      console.error(err);
    }
  })
});
