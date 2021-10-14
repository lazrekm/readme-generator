// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'projectName',
        message: "What is your project's name?",
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Please write a short description of your project',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
      },
      {
        type: 'input',
        name: 'repoUsage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?',
      },
      
];

const promptUser = () => {
    inquirer.prompt([...questions]).then((response) => {
      writeToFile("SAMPLE_README.md",generateMarkdown(response));
    });
  };

// function write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        err ? console.error(err) : console.log('Success!')
    });
};

// Function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
