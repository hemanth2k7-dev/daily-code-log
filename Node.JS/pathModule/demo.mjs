//Demo to work with path module
import path from "path";

const pathName="./folder/tasks.txt";
console.log(`Relative path of this file: ${pathName}`);
console.log(`Directory of this file:  ${path.dirname(pathName)}`);
console.log(`Name of this file:  ${path.basename(pathName)}`);
console.log(`Extension of this file: ${path.extname(pathName)}`);