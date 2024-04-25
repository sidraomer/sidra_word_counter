#! /usr/bin/env node
// Word Counter CLI Program
import inquirer from "inquirer";
let data = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter a sentence / paragraph: "
});
let words = data.sentence.split(" ");
console.log("Total Words With a Space:", words.length);
let characters = words.join("");
console.log("Total Characters Without Space:", characters.length);
