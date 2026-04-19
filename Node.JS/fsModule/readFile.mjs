import { readFile } from "node:fs";

readFile("C:/Users/lenonovo/Desktop/sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Reading failed:", err.message);
    return;
  }
  console.log(data);
});
