let array = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this); //item, index
    }
}

array.myForEach((item, index) => {
    console.log(item, index, );
});