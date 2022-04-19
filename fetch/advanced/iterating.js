const response = await fetch('https://httbin.org/stream/3'); 

try {
  for await (const chunk of response.body) {
    console.dir(JSON.parse(chunk.toString()));
  }
} catch (err) {
  console.error(err.stack);
}

// const res = await response.json();
// console.log(res);