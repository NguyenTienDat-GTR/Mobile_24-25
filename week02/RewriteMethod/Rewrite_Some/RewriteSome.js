let array = [1, 2, 3, 4, 5]

Array.prototype.someRewrite = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}

//Some() kiem tra trong mang co phan tu nao thoa dieu kien khong, 
// neu co 1 phan tu thoa dieu kien return true
// neu khong co phan tu nao thoa dieu kien thi return false

let result = array.someRewrite((currentValue) => {
    return (currentValue + 2) % 3 === 0;
})

console.log(result);