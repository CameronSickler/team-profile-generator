const inquirer = require('inquirer');

const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const askManagerQuestions = require('./Manager');
const askEngineerQuestions = require('./Engineer');
const askInternQuestions = require('./Intern');

const createdEmployees = [];

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

                askManagerQuestions();
                initializeEmployee();

            } else if (answer.menuSelection === 'Engineer') {

                askEngineerQuestions();
                initializeEmployee();

            } else if (answer.menuSelection === 'Intern') {

                askInternQuestions();
                initializeEmployee();

            } else {

                console.log('Done');
                //call function that passes in data to write HTML

            }
        })
}


// .then(function () {
//     createdEmployees.push(managerContent);
//     console.log(createdEmployees);
//     console.log(createdEmployees[0]);
// })

initializeEmployee();

// module.exports = Employee;