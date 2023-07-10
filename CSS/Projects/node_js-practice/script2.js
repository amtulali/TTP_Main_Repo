require ("./script1")
console.log("amtul1")
const outputFromScript1 = require ("./script1")
const chalk = require("chalk")
console.log(chalk.yellow("outputFromScript2"))
console.log(outputFromScript1);
