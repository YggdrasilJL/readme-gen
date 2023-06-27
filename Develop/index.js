// TODO: Include packages needed for this application
const chalk = require("chalk");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const chalkInfo = chalk.bold.whiteBright.bgRed
console.log(chalkInfo('-----> Make sure to just press "Enter" if a section does not apply. <-----'))

const questions = inquirer.prompt([
    {
        type: 'input',
        message: 'Title of project:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter description:',
        name: 'desc'
    },
    {
        type: 'input',
        message: 'Table of contents:',
        name: 'table'
    },
    {
        type: 'input',
        message: 'Installation requirements:',
        name: 'install'
    },
    {
        type: 'input',
        message: 'How to use:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'License:',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Explain if you want contributions or not:',
        name: 'contrb'
    },
    {
        type: 'input',
        message: 'Testing:',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Where can they reach you if the user has questions?',
        name: 'quest'
    }
])
.then(userResponse => {
    const mdContent = generateMarkdown(userResponse)
    
})
.catch(error => {
    console.error('An error occurred...:', error)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();