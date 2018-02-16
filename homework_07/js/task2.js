let game = confirm("Do you want to play a game?");
let n, attempt, priceMax, price;
let priceWin = 0;

if (!game) {
    console.log("You did not become a millionaire!");
}

while (game) {
    attempt = 3;
    n = 5;
    let number = Math.floor(Math.random() * (n + 1));
    priceMax = 10;
    price = priceMax;

    while (attempt > 0) {
        let user = prompt(`Enter a number from 0 to ${n}\nAttempts left: ${attempt}\nTotal prize: ${priceWin} $\nPossible prize on current attempt: ${price} $`);
        if (!isNaN(user) && (parseFloat(user) === parseInt(user)) && (parseInt(user) === number)) {
            priceWin += price;
            console.log(`You are winner! You win ${price} $`);
            let newGame = confirm("Do you want to continue a game?");
            if (newGame) {
                number = Math.floor(Math.random() * (n + 1));
                attempt = 3;
                priceMax *= 3;
                price = priceMax;
                n *= 2;
            } else {
                console.log(`Thank you for a game. Your prize is: ${priceWin} $`);
                game = confirm("Do you want to play again?");
                n = 5;
                number = Math.floor(Math.random() * (n + 1));
                priceWin = 0;
            }
        } else {
            attempt--;
            price = Math.floor(price / 2);
            if (attempt < 1) {
                console.log(`Thank you for a game. Your prize is: ${priceWin} $`);
                game = confirm("Do you want to play again?");
                priceWin = 0;
            }
        }
    }
}
