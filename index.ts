#! /usr/bin/env node

// Word Counter CLI Program

import inquirer from "inquirer";

let data = await inquirer.prompt(
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence / paragraph: "
    }
)

export (data);