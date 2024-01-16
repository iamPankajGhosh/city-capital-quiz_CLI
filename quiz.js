import chalk from "chalk";
import readLineSync from "readline-sync";

let score = 0;

console.log("[Answer the question by clicking below and then press enter]\n");

const userName = readLineSync.question(
  chalk.bgYellowBright.bold(" What is your name ? \n")
);

console.log(chalk.green.bold(`\nWelcome!!! ${userName.toUpperCase()}`));

console.log(chalk.bold("\nGuess the capital city\nLet's get started"));

function quiz(question, answer, option1, option2, reference) {
  const userAnswer = readLineSync.question(
    chalk.yellowBright.bold(
      `\n${question}\na. ${option1}\nb. ${option2}\nc. ${answer}\n`
    )
  );

  if (
    userAnswer.toUpperCase() === answer.toUpperCase() ||
    userAnswer.toUpperCase() === reference.toUpperCase()
  ) {
    console.log(chalk.bold.green("\nYou are Right!!!"));
    score += 1;
    console.log(chalk.cyanBright.bold(`Score is - ${score}`));
  } else {
    console.log(chalk.bold.red("\nYou are Wrong!!!"));
    console.log(chalk.bold.green(`\nAns - ${answer.toUpperCase()}`));
  }
}

quiz(
  "What is the capital city of canada ? ",
  "ottawa",
  "toronto",
  "vancouver",
  "a"
);

console.log(chalk.bold(" \n\tScore Board"));

if (score > 5) {
  console.log(`\nCongratulations! ${userName}, You scored: ${score}`);
} else {
  console.log(`\nBetter luck next time, ${userName}. Your score is: ${score}`);
}
