let operator = "*";
let number1 = 10;
let number2 = 5;
let result;

switch (operator) {
    case "+":
        result = number1 + number2
        break;
    case "-":
        result = number1 - number2
        break;
    case "*":
        result = number1 * number2
        break;
    case "/":
        result = number1 / number2
        break;
    default:
        console.log("Invalid");
        break;
}