import os from "os";

console.log("Operating System Information:");
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Home Directory: ${os.homedir()}`);
console.log(`Temporary Directory: ${os.tmpdir()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log("Free and total memory:");
console.log(`Free: ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB`);
console.log(`Total: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`);
const uptime = os.uptime();
console.log(
  `Time: ${(uptime / 3600).toFixed(2)} hours and ${((uptime % 3600) / 60).toFixed(2)} minutes`,
);
