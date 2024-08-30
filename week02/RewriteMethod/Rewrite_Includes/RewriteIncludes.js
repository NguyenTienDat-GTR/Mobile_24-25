let array = [1, 2, 3, 4, 5];

Array.prototype.myIncludes = function(searchElement, fromIndex) {
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
            return true;
        }
    }
    return false;
};

//iclude() method returns true if the element is found in the array, otherwise it returns false.
console.log(array.includes(3));