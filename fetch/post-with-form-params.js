const postWithFormParams = async () => {
  const params = new URLSearchParams();
  params.append('a', 1);

  const response = await fetch('https://httpbin.org/post', {
    method: 'POST',
    body: params,
  });

  const res = await response.json();

  console.log(res);
}

postWithFormParams();
