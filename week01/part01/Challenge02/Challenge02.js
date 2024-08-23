// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// var MarkMass = 95
// var MarkHeight = 1.88
// var JohnMass = 85
// var JonhHeight = 1.76

var MarkMass = 78
var MarkHeight = 1.69
var JohnMass = 92
var JonhHeight = 1.95

const BMI = function(mass, height) {
    return mass / (height * height)
}

console.log("Mark's BMI: ", BMI(MarkMass, MarkHeight))

console.log("John's BMI: ", BMI(JohnMass, JonhHeight))

const HigherBMI = function(MarkBMI, JohnBMI) {
    if (BMI(MarkMass, MarkHeight) > BMI(JohnMass, JonhHeight))
        console.log("Mark's BMI is higher than John's!");
    else console.log("John's BMI is higher than Mark's!");
}
HigherBMI(BMI(MarkMass, MarkHeight), BMI(JohnMass, JonhHeight));

const HigherBMIValue = function(MarkBMI, JohnBMI) {
    if (BMI(MarkMass, MarkHeight) > BMI(JohnMass, JonhHeight))
        console.log("Mark's BMI (" + MarkBMI + ")is higher than John's(" + JohnBMI + ")!");
    else console.log("John's BMI (" + JohnBMI + ") is higher than Mark's(" + MarkBMI + ")!");
}
HigherBMIValue(BMI(MarkMass, MarkHeight), BMI(JohnMass, JonhHeight));