let count = 0;
const p = new Promise((resolve, reject) => {
	count++;
	console.log('Action'); 
	resolve(count);
});

p.then(result => { console.log(result); });
p.then(result => { console.log(result); });