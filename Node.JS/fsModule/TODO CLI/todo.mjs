import fs from "fs/promises";
import readline from "readline";

const TASKS_FILE = "tasks.txt";
const TITLE_WIDTH = 20;
const DESCRIPTION_WIDTH = 35;
const COMPLETED_WIDTH = 12;

function formatRow(title, description, completed) {
  return `${String(title).trim().padEnd(TITLE_WIDTH)}${String(description)
    .trim()
    .padEnd(DESCRIPTION_WIDTH)}${String(completed)
    .trim()
    .padEnd(COMPLETED_WIDTH)}\n`;
}

async function initFile() {
  const header = formatRow("TITLE", "DESCRIPTION", "COMPLETED");
  try {
    const content = await fs.readFile(TASKS_FILE, "utf8");
    if (!content.startsWith(header)) {
      await fs.writeFile(TASKS_FILE, `${header}${content}`, "utf8");
    }
  } catch {
    await fs.writeFile(TASKS_FILE, header, "utf8");
  }
}

class Task {
  constructor(title, description, completed) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
  async addTask() {
    await fs.appendFile(
      TASKS_FILE,
      formatRow(this.title, this.description, this.completed),
      "utf8",
    );
  }
  static async loadTasks() {
    return await fs.readFile(TASKS_FILE, "utf8");
  }
  static async clear() {
    const header = formatRow("TITLE", "DESCRIPTION", "COMPLETED");
    await fs.writeFile(TASKS_FILE, header, "utf8");
  }
}
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
async function main() {
  try {
    console.log("Welcome to the TODO CLI");
    console.log("What you wanna do to your tasks today?");
    let ch;
    await initFile();
    do {
      console.log("1.Add tasks\n2.Display tasks\n3.Clear all tasks\n4.Exit");
      ch = Number(await askQuestion("Enter your choice:"));
      if (isNaN(ch)) {
        console.log("Invalid choice");
        continue;
      }
      switch (ch) {
        case 1:
          let n = Number(await askQuestion("Enter the number of tasks:"));
          for (let i = 0; i < n; i++) {
            const title = await askQuestion("Enter the title of the task:");
            const description = await askQuestion(
              "Enter the description of the task:",
            );
            const completed = await askQuestion(
              "Is the task completed? (yes/no):",
            );
            const task = new Task(title, description, completed);
            await task.addTask();
            console.log("Task added successfully");
          }
          break;
        case 2:
          const tasks = await Task.loadTasks();
          tasks!=""?console.log(tasks):console.log("No tasks inside");
          break;
        case 3:
            await Task.clear();
            console.log("Cleared Tasks Successfully");
            break;
        case 4:
          console.log("Exiting...");
          process.exit(0);
        default:
          console.log("Invalid choice");
          break;
      }
    } while (true);
  } catch (err) {
    console.error("Error:", err.message);
  }
}
main();
