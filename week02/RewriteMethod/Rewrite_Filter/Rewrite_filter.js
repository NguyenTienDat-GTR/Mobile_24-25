let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.filterRewrite = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]); //callback(element, index, array)
        }
    }
    console.log(result);
    return result;
}

//in ra cac so chan
let newArray = array.filterRewrite((element) => {
    return element % 2 === 0;
});