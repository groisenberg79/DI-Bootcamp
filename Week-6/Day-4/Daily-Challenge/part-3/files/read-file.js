import fs from "fs";

function readCrap(path) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      throw new Error(`Couldn't read the file: ${err}`);
    } else {
      console.log(data);
    }
  });
}

export { readCrap };
