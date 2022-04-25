import fetch, { AbortError } from 'node-fetch';

// AbortController was added in Node 14.17.0 globally
const AbortController = globalThis.AbortController || await import('abort-controller');

const controller = new AbortController();

const timeout = setTimeout(() => {
  controller.abort();
}, 150);


try {
  const response = await fetch('https://example.com', {
    signal: controller.signal,
  });
  const data = await response.json();
  console.log('data', data);
} catch (err) {
  if (err instanceof AbortError) {
    console.log('== AbortError');
  }
} finally {
  clearTimeout(timeout);
}