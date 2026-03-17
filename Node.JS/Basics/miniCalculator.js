let a = Number(process.argv[3]); //Second
let b = Number(process.argv[4]); //Third
const add = () =>
  !isNaN(a) && !isNaN(b)
    ? console.log(`${a} + ${b} = ${a + b}`)
    : console.log("Error:Two numbers required");
const sub = () =>
  !isNaN(a) && !isNaN(b)
    ? console.log(`${a} - ${b} = ${a - b}`)
    : console.log("Error:Two numbers required");
const div = () =>
  !isNaN(a) && !isNaN(b)
    ? b != 0
      ? console.log(`${a} / ${b} = ${a / b}`)
      : console.log("Error:Division by zero")
    : console.log("Error:Two numbers required");
const mul = () =>
  !isNaN(a) && !isNaN(b)
    ? console.log(`${a} * ${b} = ${a * b}`)
    : console.log("Error:Two numbers required");
let ch = process.argv[2]; /*First arguement value from command line,
Since argv[0] and argv[1] are node.exe file and current program file locations*/
switch (ch) {
  case "add":
    add();
    break;
  case "sub":
    sub();
    break;
  case "mul":
    mul();
    break;
  case "div":
    div();
    break;
  default:
    console.log("Invalid Operation");
}
