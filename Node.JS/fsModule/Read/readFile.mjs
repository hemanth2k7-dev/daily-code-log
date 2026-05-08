import fs from "fs/promises";

async function loadFile() {
  try {
    const data = await fs.readFile("C:/Users/lenonovo/Desktop/sample.txt", "utf8");
    console.log(`File contents: ${data}`);
  } catch (err) {
    console.error("Reading failed:", err.message);
  }
}

loadFile();
