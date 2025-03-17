const fs = require("fs");

const file_path = ".";

fs.readdir(file_path, (err, files) => {
  if (err) {
    return console.error(`Unable to scan directory: ${err}`);
  }
  console.log("Files in directory:");
  files.forEach((file) => {
    console.log(file);
  });
});
