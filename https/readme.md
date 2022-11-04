https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/

generate certificates with:

```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

test with
`curl -k https://localhost:8000`