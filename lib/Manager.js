const inquirer = require('inquirer');

const managerQuestions = [{
    type: 'input',
    name: 'managerName',
    message: 'What is the manager name?'
},
{
    type: 'input',
    name: 'managerID',
    message: 'What is the manager ID?'
},
{
    type: 'input',
    name: 'managerEmail',
    message: 'What is the manager email?'
},
{
    type: 'input',
    name: 'managerOfficeNumber',
    message: 'What is the manager office number?'
}
]

function Manager(name, ID, email, officeNumber) {
    this.name = name
    this.ID = ID
    this.email = email
    this.officeNumber = officeNumber
}

function askManagerQuestions() {

    inquirer.prompt(managerQuestions);

}

module.exports = askManagerQuestions;