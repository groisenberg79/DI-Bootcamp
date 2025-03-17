const fs = require("fs");

function readCrap() {
  fs.readFile("./file-data.txt", "utf-8", (err, data) => {
    if (err) {
      throw new Error(`Couldn't read the file: ${err}`);
    } else {
      console.log(data);
    }
  });
}

module.exports = { readCrap };
