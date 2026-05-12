//To create absolute path string by getting fileName from user
import path from "path";
import readline from "readline";

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

let fileName = await askQuestion("Enter file name:");
console.log(path.resolve(fileName));
