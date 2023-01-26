const { curry } = require('./curry-sum');

// curry sum

/*const sum = a => b => c => a + b + c;

const add = curry(sum);
const add1 = add(4);
const add2 = add1(7);
const result = add2(10);

console.log({result});*/

// Promise All
const promise1 = new Promise(resolve => setTimeout(() => resolve(10), 500));
const promise2 = new Promise(resolve => setTimeout(() => resolve(20), 100));
const promise3 = new Promise(resolve => setTimeout(() => resolve(0), 1000));

const { promiseAll } = require('./promise-all');

async function printResult() {
    console.time();
    const result = await promiseAll([promise3, promise1, promise2]);
    console.log({result});
    console.timeEnd();
}

printResult();
