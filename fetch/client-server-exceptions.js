class HttpResponseError extends Error {
  constructor(response, ...args) {
    super(`HTTP Error Response: ${response.status} ${response.statusText}`, ...args);
    this.response = response;
  }
}

const checkStatus = response => {
  if (response.ok) {
    // response.status >=200 && response.status <300
  } else {
    throw new HttpResponseError(response);
  }
}

const testClientServerException = async () => {
  const response = await fetch('https://httpbin.org/status/400');
  
  try {
    checkStatus(response);
  } catch(err) {
    console.error('err', err);
    const errorBody = await err.response.text();
    console.error(`Error body: ${errorBody}`);
  }
}

testClientServerException();