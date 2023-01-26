const curry = (fn) => {
    return curried = (...args) => {
        if (fn.length === args.length) {
            return fn(...args);
        }
        return curried(args);
    }
}

module.exports = {curry};
