let secret = 3;
let guess = 1;
let found = false;

console.log("Number Guessing Game");

while (guess <= 5) {
    console.log("Trying Number" + guess);

    if (guess = secret) {
        console.log("You found the number! It's " + guess);
        found = true
        break;
    }
    guess++
}