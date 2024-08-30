let array = [1, 2, , 3, 4, , 5, , ];

Array.prototype.flatMapRewrite = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result = result.concat(callback(this[i])); //callback(currentValue, currentIndex, array)
    }
    return result;
}

let newArray = array.flatMapRewrite((currentValue) => {
    return currentValue ? [currentValue] * 2 : [];
})

console.log(newArray);