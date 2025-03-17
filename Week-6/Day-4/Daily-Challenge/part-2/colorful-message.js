import chalk from "chalk";

const colorMessage = () => {
  console.log(chalk.red("Hello") + chalk.blue("World"));
  console.log(chalk.magenta("Goodbye") + chalk.green("World"));
};

export { colorMessage };
// observation: I had to change to ES6 syntax for the 'chalk' module, even though the exercise wants a require command.
