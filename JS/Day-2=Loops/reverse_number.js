/*To display reverse of a number*/

//Using string logic
let num = prompt("Enter the number");
let len = num.length;
let rev = "";
for (let i = len - 1; i >= 0; i--) {
  rev += num[i];
}
console.log(`Reverse of ${num} => ${rev}`);

//Using math logic
number=Number(num);
let Rev=0, dig=0;
for (let i = 1; i <= len; i++) {
    dig=number%10;
    Rev=Rev*10+dig;
    number=Math.floor(number/10);//Removes the decimal point
}
console.log(`Reverse of ${num} => ${Rev}`);