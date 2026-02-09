//Function to display multiplication table of a number
function displayTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
let n = Number(prompt("Enter a number"));
displayTable(n);
