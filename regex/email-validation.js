const user = 'Name LastName - test.test@test.com';

const emailRegExp = /(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})/ig;

const emailsArr = user
  .match(emailRegExp)
  .map((email) => (email));

console.log(emailsArr);