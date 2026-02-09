/*Write a function pow(x,n) that returns x in power n. Or, in other words, 
multiplies x by itself n times and returns the result.
P.S. In this task the function should support only natural values of n: integers up from 1.
eg:pow(3, 2) = 3 * 3 = 9*/
function pow(x, n) {
  if (n >= 0) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= x;
    }
    return result;
  } else {
    console.log("Power not valid");
  }
}
let x = Number(prompt("Enter number"));
let n = Number(prompt("Enter power"));
console.log(pow(x, n));
