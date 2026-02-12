//Buid a mini array driven utility
function reverseArr(arr) {
  let len = arr.length,
    rev = [];
  for (let i = len; i > 0; i--) {
    rev[len - i] = arr[i - 1];
  }
  return rev;
}

function sumArr(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
}

function maxArr(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//Main program
let choice;
alert("Program to work with arrays!");
do {
  alert(
    "Options:- 1.To reverse , 2.To calculate sum of elements , 3.To find maximum element",
  );
  let n = Number(prompt("Enter number of elements in array"));
  let arr = [];
  for (let i = 0; i < n; i++) {
    let ele = Number(prompt("Enter number element"));
    arr[i] = ele;
  }
  op = prompt("Enter Option");
  switch (op) {
    case "1":
      console.log(`Reversed array=>${reverseArr(arr)}`);
      break;
    case "2":
      console.log(`Sum of elements of array = ${sumArr(arr)}`);
      break;
    case "3":
      console.log(`Maximum of elements of array = ${maxArr(arr)}`);
      break;
    default:
      alert("Invalid option,please try again");
  }
  choice = confirm("Do you want to continue?");
} while (choice);
