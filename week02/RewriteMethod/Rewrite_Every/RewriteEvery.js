let array = [1, 2, 3, 4, 5]

Array.prototype.everyRewrite = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
}

//Every() kiem tra trong mang co phan tu nao khong thoa dieu kien khong,
// neu co 1 phan tu khong thoa dieu kien return false
// neu tat ca phan tu thoa dieu kien thi return true

let result = array.everyRewrite((currentValue) => {
    return (currentValue + 2) % 3 === 0;
})

console.log(result);