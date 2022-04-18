const testFetch = async () => {
  const response = await fetch('https://api.github.com/');
  const data = await response.json();
  console.log(data)
  return data;
}

const res = testFetch();

// console.log(res);
