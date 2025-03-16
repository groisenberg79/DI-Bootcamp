const fs = require("fs");

function readFile(file_path) {
  const info = fs.readFile(file_path, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
  console.log("The file has been read");
  return info;
}

function writeFile(file_path, data) {
  fs.writeFile(file_path, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Write operation complete.");
    }
  });
}

module.exports = { readFile, writeFile };
