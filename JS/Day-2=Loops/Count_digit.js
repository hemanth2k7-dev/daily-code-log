/*To count number of digits in a number*/
let number=prompt("Enter a number");
let count=0;
for (const digit in number) {
    count++;
}
console.log(`Number of digits in ${number} = ${count}`);