//Basic CLI calculator
const add = (a, b) =>
  !isNaN(a) && !isNaN(b)
    ? console.log(`${a} + ${b} = ${a + b}`)
    : console.log("Error:Two numbers required");
const sub = (a, b) =>
  !isNaN(a) && !isNaN(b)
    ? console.log(`${a} - ${b} = ${a - b}`)
    : console.log("Error:Two numbers required");
const div = (a, b) =>
  !isNaN(a) && !isNaN(b)
    ? b != 0
      ? console.log(`${a} / ${b} = ${a / b}`)
      : console.log("Error:Division by zero")
    : console.log("Error:Two numbers required");
const mul = (a, b) =>
  !isNaN(a) && !isNaN(b)
    ? console.log(`${a} * ${b} = ${a * b}`)
    : console.log("Error:Two numbers required");

const readline = require("readline"); //Importing Module for I/O
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); //Creates an interface of I/O
rl.question("Enter First number:", (num1) => {
  //To ask a question in command line and use callback accordingly
  let a = Number(num1);
  rl.question("Enter Second number:", (num2) => {
    let b = Number(num2);
    rl.question("Choose Operation(add/sub/mul/div):", (op) => {
      switch (op.toLowerCase()) {
        case "add":
          add(a, b);
          break;
        case "sub":
          sub(a, b);
          break;
        case "mul":
          mul(a, b);
          break;
        case "div":
          div(a, b);
          break;
        default:
          console.log("Invalid Operation");
      }
      rl.close(); //To close question
    });
  });
});
