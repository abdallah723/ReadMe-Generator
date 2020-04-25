const inquirer = require("inquirer");
const axios = require ("axios");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please give a brief description of your application"
    },
    {
        type: "input",
        name: "installation",
        message: "Please describe the installation process for your application"

    },
    {
        type: "input",
        name: "usage",
        message: "Please give a brief description on how to use your application."
    },
    {
        type: "list",
        message: "What type of license used?",
        name: "license",
        choices: [
            "The Unlicense",
            "Eclipse",
            "GNU v3.0",
            "MIT",
            "Apache 2.0",
            "BDS 2.0"
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Please provide the names any contributors."
    },
    {
        type: "input",
        name: "softwares",
        message: "Please provide the types of programs and or softwares used to develop your application"
    },
    {
        type: "input",
        name: "test",
        message: "Please explain how to run tests for your applicatoin."
    }

]).then(function(data) {
  return `
  # ${data.title}

  #Table of Context
  1) Description
  2) Installation
  3) Usage
  4) License
  5) Contributors
  6) Softwares
  7) Testing


  1) **Description**
  ${data.description}

  2) **Installation**
  ${data.installation}

  3) **Usage**
  ${data.usage}

  4) **License**
  ${data.license}

  5) **Contributors**
  ${data.contributors}

  6) **Softwares**
  ${data.softwares}

  7) **Testing**
  ${data.test}

  `  

  fs.writeFile(fileName, data, (err) => {
      if (err) {
          return console.log(err)
      }
  })
})