// ReferenceError: fileFromSync is not defined in buit-in fetch module
const fetchFromFile = async () => {
  const mimetype = 'text/plain';
  const blob = fileFromSync('./input.txt', mimtype);
  const url = 'https://httpbin.org/post';

  const response = await fetch({
    method: 'POST',
    data: blob,
  });

  const data = await fetch.response.json();

  console.log(data);
}

fetchFromFile();