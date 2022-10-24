const getPromise = (num) => {
  return new Promise((resolve, reject) => {
    resolve(`promise #${num}`);
  })
}

const obj = {};
obj.one = getPromise(1);
obj.two = getPromise(2);


const keys = Object.keys(obj);
const values = Object.values(obj);
const resolved = await Promise.all(values);
const result = {};
keys.forEach((key, i) => result[key] = resolved[i]);


console.log('res', result);
