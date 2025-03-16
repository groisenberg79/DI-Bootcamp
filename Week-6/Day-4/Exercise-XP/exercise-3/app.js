const fm = require("./fileManager.js");

const data = fm.readFile("./hello_world.txt");
fm.writeFile("./bye_world.txt", "Writing to the file");

const data2 = fm.readFile("./bye_world.txt");
