var euro = parseInt(prompt("Enter amount of EURO: "));
var dollars = parseInt(prompt("Enter amount of USD: "));

const oneEuro = 1;
const curEur=34.5116;
const curDol=27.7424;

var curDiff=(curEur/curDol);
var euroToGryvnya=curEur*euro;
var dollarsToGryvnya=curDol*dollars;
var euroToDollars=curDiff*oneEuro;

if(!isNaN(euro) && !isNaN(dollars))  {
	console.log(`${euro} euros are equal ${parseFloat(euroToGryvnya.toFixed(2))} UAH, ${dollars} dollars are equal ${parseFloat(dollarsToGryvnya.toFixed(2))} UAH, one euro is equal ${parseFloat(euroToDollars.toFixed(2))} dollars.`);
} else {
	console.log("Incorrect data");
}