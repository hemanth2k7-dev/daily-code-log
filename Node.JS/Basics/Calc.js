//Basic CLI calculator
const add = (a, b) => console.log(`${a} + ${b} = ${a + b}`);
const sub = (a, b) => console.log(`${a} - ${b} = ${a - b}`);
const div = (a, b) =>
  b != 0
    ? console.log(`${a} / ${b} = ${a / b}`)
    : console.log("Error:Division by zero");
const mul = (a, b) => console.log(`${a} * ${b} = ${a * b}`);

const readline = require("readline"); //Importing Module for I/O

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  }); //Creates an interface for I/O
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      //To ask a question in command line and use callback accordingly
      rl.close(); //To close question
      resolve(answer);
    });
  });
}

async function main() {
  let a = Number(await askQuestion("Enter first number:"));
  let b = Number(await askQuestion("Enter second number:"));
  if (!isNaN(a) && !isNaN(b)) {
    let op = await askQuestion("Choose Operation(add/sub/mul/div):");
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
  } else {
    console.log("Error:Invalid type(expected a number)");
  }
}
main();
