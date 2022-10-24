import bcrypt  from 'bcrypt';

const salt = bcrypt.genSaltSync(1);
const pass = 'test-pass-123123---123123123edsfdsfsnOUIs5kJ7naTuTFkBy1veu';
nOUIs5kJ7naTuTFkBy1veu
const hash = bcrypt.hashSync(pass, salt);

console.log('hash', hash);

const res = bcrypt.compareSync(pass, hash);
const res2 = bcrypt.compareSync('pass', hash);

console.log('res', res);
console.log('res2', res2);
console.log('salt', salt);
// $2b $04 $NxutEIwhhTLwW5vMSPssBO sAnPOtmYVKYelH0EUKFd/4jJHn6MBaa
// $2b$04$nOUIs5kJ7naTuTFkBy1veu