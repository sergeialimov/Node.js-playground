https://medium.com/frontend-canteen/http-transfer-large-files-can-consider-these-three-solutions-24b03d1e2931

https://cabulous.medium.com/how-http-delivers-a-large-file-78af8840aad5

When sending a response, the server adds a header Transfer-Encoding: chunked, letting the browser know that data is transmitted in chunks.


Each piece of chunked data has the following components:

- a Length block marks, well, the length of the current part of chunked data
the chunked data block
- a CRLF separator at the end of each block