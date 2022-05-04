const inquirer = require('inquirer');

const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const askManagerQuestions = require('./Manager');
const askEngineerQuestions = require('./Engineer');
const askInternQuestions = require('./Intern');

//to hold created employee objects in array but not working atm
const employeesArray = [];

var currentUserSelection = '';

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



//function to ask user what employee to add or if done adding employees

function initializeEmployee() {
    //inquirer prompt
    return inquirer.prompt(menuQuestion).then(answers => {

        //I want this code block to send the user through a cycle of questions
        //OR save the user's answer to the currentUserSelection variable
        //so that a different function can use it to start that question cycle.

    })
        .catch(error => {

            if (error.isTtyError) {

                console.log('error')

            } else {

                console.log('something else error')

            }

        })
}


//function that uses if/else to call a function depending on user choice
// Manager, Engineer, Intern, or Done

function employeeInformationGenerator(x) {


    if (x === 'Manager') {

        askManagerQuestions();

    } else if (x === 'Engineer') {

        askEngineerQuestions();

    } else if (x === 'Intern') {

        askInternQuestions();

    } else {

        console.log('User selected DONE for an answer');
        //call function that passes in data to write HTML

    }

    reinitialize(currentUserSelection);

}


//function to determine if user requested to add another employee and
//if so, calls the initialEmployee function again to loop user through

function reinitialize(currentUserSelection) {

    if (currentUserSelection !== 'Done') {
        initializeEmployee();
    } else {
        console.log('reinitialize else block executed')
    }

}


//function call to start prompting user with questions
initializeEmployee();


// module.exports = Employee;