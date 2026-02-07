/*Mini caculator for addition,subtraction,multiplication and division*/
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let op = prompt("Enter Operation(+,-,*,/)");
if (op=="+" ||op=="*" ||op=="-" ||op=="/") {
  switch (op) {
    case "+":
      console.log(`${a} + ${b} = ${a + b}`);
      break;
    case "-":
      console.log(`${a} - ${b} = ${a - b}`);
      break;
    case "*":
      console.log(`${a} * ${b} = ${a * b}`);
      break;
    case "/":
      console.log(`${a} / ${b} = ${a / b}`);
      break;
  }
}
else{
    console.log("Invalid Operator");
}