// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

var MarkMass = 95
var MarkHeight = 1.88
var JohnMass = 85
var JonhHeight = 1.76

// var MarkMass = 78
// var MarkHeight = 1.69
// var JohnMass = 92
// var JonhHeight = 1.95

const BMI = function(mass, height) {
    return mass / (height * height)
}

console.log("Mark's BMI: ", BMI(MarkMass, MarkHeight))

console.log("John's BMI: ", BMI(JohnMass, JonhHeight))