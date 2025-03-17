const fs = require("fs");

const source_path = "./source.txt";
const destination_path = "./destination.txt";

fs.readFile(source_path, "utf-8", (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err.message}`);
    return;
  }
  fs.writeFile(destination_path, data, (err) => {
    if (err) {
      console.error(`Error writing to the file: ${err.message}`);
    } else {
      console.log(`File successfully copied to ${destination_path}`);
    }
  });
});
