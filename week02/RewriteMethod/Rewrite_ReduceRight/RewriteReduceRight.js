let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.reduceRightRewrite = function(callback, initialValue) {
    let result = initialValue;
    for (let i = this.length - 1; i >= 0; i--) {
        result = callback(result, this[i]);
    }
    return result;
}

let b = array.reduceRightRewrite((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 5)

console.log(b);