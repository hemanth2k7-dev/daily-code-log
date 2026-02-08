/*To find the sum of digits of a number*/
let num=Number(prompt("Enter the number"));
let dig=0,sum=0,len=String(num).length;
for (let i = 1; i <= len; i++) {
    dig=num%10;
    sum+=dig;
    num=Math.floor(num/10);
}
console.log(`Sum of digits = ${sum}`);