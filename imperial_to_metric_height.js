function convertInchesToCentimeters(number) {
    heightCentimeters = number * 2.54
    return heightCentimeters
}


var myName = prompt("What is your name?");
var heightInches = prompt("What is your height in inches?");
var weightPounds = prompt ("what is your weight in pounds?");

var heightCentimeters = heightInches * 2.54;
var weightKilograms = weightPounds * 0.453592;
console.log(myName + ' is ' + heightCentimeters + 'cm and ' + weightKilograms + ' kg. ');
alert(myName + ' is ' + heightCentimeters + 'cm and ' + weightKilograms + ' kg. ');