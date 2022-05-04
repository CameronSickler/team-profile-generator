const inquirer = require('inquirer');

const managerQuestions = [{
    type: 'input',
    name: 'name',
    message: 'What is the name?'
},
{
    type: 'input',
    name: 'ID',
    message: 'What is the ID?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is the email?'
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'What is the office number?'
}
]

function Manager(name, ID, email, officeNumber) {
    this.name = name
    this.ID = ID
    this.email = email
    this.officeNumber = officeNumber
}

function askManagerQuestions() {

    inquirer.prompt(managerQuestions)
        .then(answers => {
            const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber);
            console.log(manager)
            return manager
        })
}

module.exports = askManagerQuestions;