// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => inquirer.prompt([
  {
    name: 'username',
    type: 'input',
    message: 'What is your GitHub username?'
  },
  {
    name: 'email',
    type: 'input',
    message: 'What is your email address?'
  },
  {
    name: 'title',
    type: 'input',
    message: "What is your project's name"
  },
  {
    name: 'description',
    type: 'input',
    message: 'Please write a short description of your project'
  },
  {
    name: 'license',
    type: 'list',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    name: 'dependencies',
    type: 'input',
    message: 'What command should be run to install dependencies?',
    default: 'npm i'
  },
  {
    name: 'tests',
    type: 'input',
    message: 'What command should be run to run tests?',
    default: 'npm test'
  },
  {
    name: 'usage',
    type: 'input',
    message: 'What does the user need to know about using the repo?'
  },
  {
    name: 'contributing',
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?'
  }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
  questions()
    .then((data) => {
      writeToFile('README.md', data);
    })
    .then(() =>
      console.log('Generating README...')
    )
    .catch(err => console.log(err));
}

// Function call to initialize app
init();
