const chalk = require("chalk");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs")

const chalkWarn = chalk.bold.whiteBright.bgRed
const chalkMsg = chalk.bold.yellow.bgMagenta
const chalkPrefix = chalk.green
const success = chalk.bold.bgGreen
console.log(chalkWarn('-----> Just press "Enter" if a section does not apply. <-----\n'))

  inquirer
   .prompt([
    {
        type: 'input',
        message: chalkMsg('Title of project:\n'),
        name: 'title'
    },
    {
        type: 'input',
        message: chalkMsg('Please enter description:\n'),
        name: 'desc'
    },
    {
        type: 'checkbox',
        message: chalkMsg('Table of contents:\n'),
        name: 'table',
        prefix: chalkWarn('\n--> Check off ones that apply to your project.') + chalkPrefix('\n\n?'),
        choices: [
            {name: 'Installation'},
            {name: 'Usage'},
            {name: 'Contributions'},
            {name: 'Testing'},
            {name: 'Questions'}
        ]
    },
    {
        type: 'input',
        message: chalkMsg('Installation requirements:\n'),
        name: 'install'
    },
    {
        type: 'input',
        message: chalkMsg('How to use:\n'),
        name: 'usage'
    },
    {
        type: 'list',
        message: chalkMsg('License:\n'),
        choices: ['Apache 2.0','MIT','Mozilla','None'],
        name: 'license'
    },
    {
        type: 'input',
        message: chalkMsg('Explain if you want contributions or not:\n'),
        name: 'contrb'
    },
    {
        type: 'input',
        message: chalkMsg('Testing:\n'),
        name: 'test'
    },
    {
        type: 'input',
        message: chalkMsg('What is your GitHub username?\n'),
        name: 'github'
    },
    {
        type: 'input',
        message: chalkMsg('What is your email?\n'),
        name: 'email'
    }
])
.then(data => {
    const mdContent = generateMarkdown(data)
    writeToFile('README.md', mdContent)
    
})
.catch(error => {
    console.error('An error occurred...:', error)
})


function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, error => {
        if (error) {throw error} else {
        console.log(`Readme file saved ${success('successfully!')} Check your folder.`)}
    })
}