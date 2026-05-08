import fs from "fs/promises";
const student = { name: "Hemanth", semester: 2, skills: ["JS", "HTML", "CSS","Node.js"] };
async function writeStudent() {
  try {
    await fs.writeFile("student.json", JSON.stringify(student, null, 2),"utf8");
    console.log("File written successfully");
  } catch (err) {
    console.error("Writing failed:", err.message);
  }
}

writeStudent();
