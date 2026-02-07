/*Swapping two numbers */
let a=Number(prompt("Enter first number 'a'")),
b=Number(prompt("Enter second number 'b'"));
console.log(`Before Swap=>a=${a},b=${b}`);
a=a+b;
b=a-b;
a=a-b;
console.log(`After Swap=>a=${a},b=${b}`);