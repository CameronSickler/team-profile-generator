const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const askManagerQuestions = require('./Manager');

const createdEmployees = [];

const managerQuestions = [{
    type: 'input',
    name: 'managerName',
    message: 'What is the manager name?'
}
]

const menuQuestion = [
    {
        type: 'list',
        name: 'menuSelection',
        message: 'Add one of the following or select done if finished.',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'Done'
        ]
    }
]

function initializeEmployee() {
    //inquirer prompt
    inquirer.prompt(menuQuestion)
        .then(answer => {
            if (answer.menuSelection === 'Manager') {
                const managerContent = askManagerQuestions();
            } else {
                console.log('error recvd')
            }
        })




    //question: Manager,Engineer, Intern, Done.
    //if Manager move to Manager.js
    //if Engineer move to Engineer.js
    //if Intern move to Intern.js
    //if Done, write file to dist directory
}

// .then(function () {
//     createdEmployees.push(managerContent);
//     console.log(createdEmployees);
//     console.log(createdEmployees[0]);
// })

initializeEmployee();

// module.exports = Employee;