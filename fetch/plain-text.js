const testFetch = async () => {
  const response = await fetch('https://api.github.com/');
  const body = await response.text();

  console.log(body)

  return body;
}

const res = testFetch();
