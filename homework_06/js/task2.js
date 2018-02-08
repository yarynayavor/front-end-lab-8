let euro = parseInt(prompt("Enter amount of EURO: "));
let dollars = parseInt(prompt("Enter amount of USD: "));

const oneEuro = 1;
const curEur=34.5116;
const curDol=27.7424;

let curDiff=(curEur/curDol);
let euroToGryvnya=curEur*euro;
let dollarsToGryvnya=curDol*dollars;
let euroToDollars=curDiff*oneEuro;

if(!isNaN(euro) && !isNaN(dollars))  {
	console.log(`${euro} euros are equal ${parseFloat(euroToGryvnya.toFixed(2))} UAH, ${dollars} dollars are equal ${parseFloat(dollarsToGryvnya.toFixed(2))} UAH, one euro is equal ${parseFloat(euroToDollars.toFixed(2))} dollars.`);
} else {
	console.log("Incorrect data");
}