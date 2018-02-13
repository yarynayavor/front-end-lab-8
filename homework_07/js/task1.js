const maxFloors = 20;
let number = prompt("Enter natural number from 1 to 20:", "5");
let natural = (!isNaN(number)) && (number > 0) && (parseFloat(number) === parseInt(number));

if (natural && number <= maxFloors) {
    let brick = "[~]";
    let spaces = "";
    for (let i = 1; i <= number; i++) {
        for (let j = 0; j <= (number - i); j++) {
            spaces = " ".repeat(j * 3);
        }
        console.log(spaces + brick.repeat(i - 1) + brick.repeat(i) + "\n");
    }
} else {
    console.log("Incorrect data. You can enter only natural number from 1 to 20.");
}
