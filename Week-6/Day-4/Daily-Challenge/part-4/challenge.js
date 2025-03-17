// In challenge.js, require the modules from the previous tasks: greeting.js, colorful-message.js, and read-file.js.

import { greet } from "../part-1/greeting.js";
import { colorMessage } from "../part-2/colorful-message.js";
import { readCrap } from "../part-3/files/read-file.js";

greet("Johnny");
colorMessage();
readCrap(
  "C:/Users/grois/OneDrive/Desktop/DI-Bootcamp/Week-6/Day-4/Daily-Challenge/part-3/files/file-data.txt"
);
