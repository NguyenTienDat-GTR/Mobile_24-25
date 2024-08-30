let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.mapRewrite = function(callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)); //callback(element, index, array)
    }
    return newArray;
}

let newArray = array.mapRewrite((element, index, array) => {
    console.log(element * 2)
})