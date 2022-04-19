
const postWithJSON = async () => {
  const body = { a: 1 };

  const response = await fetch('https://httpbin.org/post', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Conten-Type': 'application/json' }
  });

  const data = await response.json();

  console.log(data);
}

postWithJSON();