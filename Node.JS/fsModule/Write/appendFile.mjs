import fs from "fs/promises";
async function appendTask(task) {
  try {
    await fs.appendFile("tasks.txt", `${task}\n`,"utf8");
    console.log(`Task added : ${task}`);
  } catch (err) {
    console.error("Appending failed:", err.message);
  }
}

async function main() {
    await appendTask("1.Do workout");
    await appendTask("2.Watch today's market");
    await appendTask("3.Learn JS");
}
main();