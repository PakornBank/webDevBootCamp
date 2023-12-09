const fs = require("fs");
const folderName = process.argv[2] || "Project";
//console.log(fs);
// fs.mkdir("Dogs", { recursive: true }, (err) => {
//   console.log("IN THE CALLBACK");
//   if (err) throw err;
// });
// fs.mkdirSync("Cats");
// console.log("I COME AFTER MKDIR");

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/style.css`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
} catch (err) {
  console.log(err);
}
