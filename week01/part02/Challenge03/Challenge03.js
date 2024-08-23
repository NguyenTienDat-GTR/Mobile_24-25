/* Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter) */

//creat object for Mark and John
const Mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() { //create method to calculate BMI
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const John = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() { //create method to calculate BMI
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log("Mark's BMI: ", Mark.calcBMI().toFixed(2));
console.log("John's BMI: ", John.calcBMI().toFixed(2));