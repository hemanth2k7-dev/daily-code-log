//A mini private wallet system
function createWallet(savedPin) {
  let balance = 0,
    transactions = [];
  let funcs = {
    add: (amount) => {
      if (amount > 0) {
        balance += amount;
        transactions.push({
          type: "credit",
          amount,
          balanceAfter: balance,
          time: new Date().toLocaleString(),
        });
      } else {
        alert("Enter a valid amount");
      }
    },
    spend: (amount) => {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        transactions.push({
          type: "debit",
          amount,
          balanceAfter: balance,
          time: new Date().toLocaleString(),
        });
      } else {
        alert("Insufficient balance");
      }
    },
    getBalance: () => balance,
    authorize: (inputPin) => inputPin === savedPin,
    getTransactions: ()=>[...transactions],
    getLastTransaction: () => {
      const last = transactions.at(-1);
      if (!last) {
        console.log("No transactions yet.");
        return;
      }
      const header = "TYPE".padEnd(12) + "AMOUNT".padEnd(14) + "BALANCE".padEnd(14) + "TIME".padEnd(24);
      const row = last.type.padEnd(12) + last.amount.toLocaleString().padEnd(14) + last.balanceAfter.toLocaleString().padEnd(14) + last.time.padEnd(24);
      console.log(header);
      console.log(row);
    },
  };
  return funcs;
}

function displayTransactions(transactions) {
  const colWidth = { type: 12, amount: 14, balance: 14, time: 24 };
  const formatRow = (tx) =>
    tx.type.padEnd(colWidth.type) +
    tx.amount.toLocaleString().padEnd(colWidth.amount) +
    tx.balanceAfter.toLocaleString().padEnd(colWidth.balance) +
    tx.time.padEnd(colWidth.time);
  transactions.forEach((tx) => console.log(formatRow(tx)));
}
//Main part of Program
let exit = "no",
  userpin;
let newWallet;
alert("Your Wallet");
do {
  alert(
    "Operations you can perform:-\n1.Add new wallet\n2.Add balance\n3.Update spent amount\n4.Show Balance\n5.Show transaction history\n6.Show last transaction history\n7.Exit",
  );
  let ch = Number(prompt("Enter your choice of Opertion"));
  switch (ch) {
    case 1:
      userpin = Number(prompt("Create a safe pin number"));
      newWallet = createWallet(userpin);
      alert("Done");
      break;
    case 2:
      if (newWallet === undefined) {
        alert("Sorry no wallet found");
      } else {
        let pin = Number(prompt("Enter your pin"));
        if (newWallet.authorize(pin)) {
          let amount = Number(prompt("Enter the amount"));
          !isNaN(amount)?newWallet.add(amount):alert("Enter a valid amount");
        } else {
          alert("Wrong pin!");
        }
      }
      break;
    case 3:
      if (newWallet === undefined) {
        alert("Sorry no wallet found");
      } else {
        let pin = Number(prompt("Enter your pin"));
        if (newWallet.authorize(pin)) {
          let amount = Number(prompt("Enter the amount"));
          !isNaN(amount)?newWallet.spend(amount):alert("Enter a valid amount");
        } else {
          alert("Wrong pin!");
        }
      }
      break;
    case 4:
      if (newWallet === undefined) {
        alert("Sorry no wallet found");
      } else {
        let pin = Number(prompt("Enter your pin"));
        if (newWallet.authorize(pin)) {
          alert(`Balance => ${newWallet.getBalance()}/-`);
        } else {
          alert("Wrong pin!");
        }
      }
      break;
    case 5:
      if (newWallet === undefined) {
        alert("Sorry no wallet found");
      } else {
        let pin = Number(prompt("Enter your pin"));
        if (newWallet.authorize(pin)) {
          const header = "TYPE".padEnd(12) + "AMOUNT".padEnd(14) + "BALANCE".padEnd(14) + "TIME".padEnd(24);
          console.log(header);
          displayTransactions(newWallet.getTransactions());
        } else {
          alert("Wrong pin!");
        }
      }
      break;
    case 6:
      if (newWallet === undefined) {
        alert("Sorry no wallet found");
      } else {
        let pin = Number(prompt("Enter your pin"));
        if (newWallet.authorize(pin)) {
          newWallet.getLastTransaction();
        } else {
          alert("Wrong pin!");
        }
      }
      break;
    case 7:
      exit = "yes";
      break;
  }
} while (exit == "no");
