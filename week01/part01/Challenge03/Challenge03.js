// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

var dolphinScore = [96, 108, 89];
var koalaScore = [88, 91, 100];

const CalculateEverage = function(scores) {
    var totalScore = scores.reduce((acc, scores) => acc + scores, 0)
    return totalScore / scores.length;
}

//task 1
var everageDolphinScore = CalculateEverage(dolphinScore);
console.log("everage DolphinScore: " + everageDolphinScore);
var everageKoalaScore = CalculateEverage(koalaScore);
console.log("everage KoalaScore: " + everageKoalaScore);

// task 2
const compare = function(everageDolphinScore, everageKoalaScore) {
    if (everageDolphinScore > everageKoalaScore)
        console.log("Dolphin is winner!");
    else if (everageDolphinScore < everageKoalaScore)
        console.log("Koala is winner!");
    else console.log("the two teams drew");
}
compare(everageDolphinScore, everageKoalaScore)

//task 3 and 4
console.log("");

const checkMinimumScore = function(scores) {
    return scores >= 100;
}
if (everageDolphinScore > everageKoalaScore && checkMinimumScore(everageDolphinScore))
    console.log("Dolphin is winner!");
else if (everageDolphinScore < everageKoalaScore && checkMinimumScore(everageKoalaScore))
    console.log("Koala is winner!");
else if (everageDolphinScore == everageKoalaScore && checkMinimumScore(everageDolphinScore) && checkMinimumScore(everageKoalaScore))
    console.log("The two teams drew");
else console.log("No one wins to the trophy ");