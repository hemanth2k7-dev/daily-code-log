const greet=()=>{
let commandArg=process.argv;//Array argv inside process object
console.log(`Hello ${commandArg[2]}`);};
greet();