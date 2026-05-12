//Demo to join a file with a directory's path for proper path
import path from "path";
import { fileURLToPath } from "url";

const Path=fileURLToPath(import.meta.url);
const __dirname=path.dirname(Path);
console.log(path.join(__dirname,"sample/demo.mjs"));