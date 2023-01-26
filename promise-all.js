const promiseAll = (promises) => {
    let counter = 0;
    const result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(data => {
                result[index] = data;
                ++counter;
                console.log({data});
                if (counter === promises.length) {
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            })
        })
    })
}

module.exports = { promiseAll };
