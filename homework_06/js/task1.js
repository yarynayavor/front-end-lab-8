var a=parseFloat(prompt("Enter length of size A:", "3"));
var b=parseFloat(prompt("Enter length of size B:", "4"));
var c=parseFloat(prompt("Enter length of size C:", "5"));
var showTypeOfTriangle=findType();
var showSquare=square();

function findType() {
	var typeOfTriangle;
	if(Math.pow(c,2)===Math.pow(a,2)+Math.pow(b,2)) {
		typeOfTriangle="right triangle";
	} else if(a===b && b===c) {
		typeOfTriangle="equilateral";
	} else if(a===b || a===c || b===c) {
		typeOfTriangle="isosceles";
	} else {
		typeOfTriangle="scalene";
	}
	return typeOfTriangle;
}

function square() {
	var p=parseFloat((a+b+c)/2);
	var res=Math.sqrt(p*(p-a)*(p-b)*(p-c));
	return parseFloat(res.toFixed(2));
}

if(!isNaN(a) && !isNaN(b) && !isNaN(c)) {
	if((a>0 && b>0 && c>0) && (showSquare>0)) {
		console.log(`Type of triangle is ${showTypeOfTriangle} and square is ${showSquare}`);
	} 
} else {
	console.log("Incorrect data");
}