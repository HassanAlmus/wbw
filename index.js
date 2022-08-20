const fs = require("fs");
const files = fs.readdirSync("./");
const timesDone = 1;
fs.writeFile('.gitignore', files.splice(1000).join('\n'), ()=>console.log('done'))
console.log(files.length)