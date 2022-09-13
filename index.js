// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(`./utils/generateMarkdown.js`);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        message: 'Please provide your email.',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please provide GitHub username.',
        name: 'username'
    },
    {
        type: 'input', 
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a brief description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please list the table of contents to your project',
        name: 'contents'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please list your collaborators GitHub names.',
        name: 'collaborators'
    },
    {
        type: 'list',
        message: 'Please add a license',
        name: 'license',
        choices: ['MIT','Apache','GNU AGPLv3','No License']
    },
    {
        type: 'input',
        message: 'Please write details of the testing procedures.',
        name: 'tests'
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('README has been created!') 
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
        .then(input => {
            return generateMarkdown(input);
        })
        .then(markdown => {
            writeToFile('./dist/README.md', markdown);
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init();
