const response = await fetch('https://example.com');

// Returs an array of values instead of string of comma-separated values
console.log(response.ok);
console.log(response.status);
console.log(response.statusText);
console.log(response.headers.get('content-type'));
console.log(response.headers.raw()); // not a function
// console.log(response.headers.raw()['set-cookie']);
