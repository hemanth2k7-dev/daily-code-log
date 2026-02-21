//Expense Tracker
const addExpense = (array) => {
  let amount = Number(prompt("Enter amount spent"));
  let cat = prompt("Enter category");
  let note = prompt("Enter note if you want", "None");
  array.push({ amount: amount, category: cat.toLowerCase(), note: note });
  alert("Done");
};

function showExpenses(array) {
  console.log("AMOUNT".padEnd(10), "CATEGORY".padEnd(15), "NOTE");
  for (let i = 0; i < array.length; i++) {
    const expense = array[i];
    console.log(
      String(expense.amount).padEnd(10),
      expense.category.padEnd(15), //padEnd(length to be taken by string,add string till that length),eg:str.padEnd(5,"-")
      expense.note,
    );
  }
}

function getHighestExpense(array) {
  let maxExpense = 0,
    max;
  for (let i = 0; i < array.length; i++) {
    const expense = array[i];
    if (expense.amount > maxExpense) {
      maxExpense = expense.amount;
      max = expense;
    }
  }
  console.log(
    `Highest Expense is for ${max.note} ${max.category} = ${max.amount}/-`,
  );
}

function getTotalExpense(array) {
  let totalExpense = 0;
  for (let i = 0; i < array.length; i++) {
    const expense = array[i];
    totalExpense += expense.amount;
  }
  console.log(`Total Expense = ${totalExpense}/-`);
}

function filterbyCategory(array, cat) {
  let total = 0;
  console.log("AMOUNT".padEnd(10), "CATEGORY".padEnd(15), "NOTE");
  for (let i = 0; i < array.length; i++) {
    const expense = array[i];
    if (cat.toLowerCase() == expense.category.toLowerCase()) {
      console.log(
        String(expense.amount).padEnd(10),
        expense.category.padEnd(15),
        expense.note,
      );
      total += expense.amount;
    }
  }
  console.log(`Expense for ${cat} in Total = ${total}/-`);
}

//Main part of Program
let exit="no";
let expenses = [];
alert("Expense Tracker");
do {
  alert(
    "Operations you can perform:-\n1.Add expense\n2.Show expenses\n3.Filter by Category and show total in that category\n4.Show total expense\n5.Show Highest Expense\n6.Exit",
  );
  let ch = Number(prompt("Enter your choice of Opertion"));
  switch (ch) {
    case 1:
      addExpense(expenses);
      break;
    case 2:
      showExpenses(expenses);
      break;
    case 3:
      let category = prompt("Enter Category");
      filterbyCategory(expenses, category);
      break;
    case 4:
      getTotalExpense(expenses);
      break;
    case 5:
      getHighestExpense(expenses);
      break;
    case 6:
      exit = "yes";
      break;
  }
} while (exit == "no");
