let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.reduceRewrite = function(callback, initialValue) {
    let result = initialValue;
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i]); //callback(accumulator, currentValue, currentIndex, array)
    }
    return result;
}

let b = array.reduceRewrite((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);

console.log(b);