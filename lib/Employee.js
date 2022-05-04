const inquirer = require('inquirer');

const askManagerQuestions = require('./Manager');
const askEngineerQuestions = require('./Engineer');
const askInternQuestions = require('./Intern');

//to hold created employee objects in array but not working atm
const employeesArray = [];

var currentUserSelection

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
    return inquirer.prompt(menuQuestion)

        .then(answers => {

            currentUserSelection = answers.menuSelection

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

function employeeInformationGenerator() {


    if (currentUserSelection == 'Manager') {

        askManagerQuestions();

    } else if (currentUserSelection == 'Engineer') {

        askEngineerQuestions();

    } else if (currentUserSelection == 'Intern') {

        askInternQuestions();

    } else {

        console.log('User selected DONE for an answer');
        //call function that passes in data to write HTML

    }

}


//function to determine if user requested to add another employee and
//if so, calls the initialEmployee function again to loop user through

function reinitialize() {

    if (currentUserSelection !== 'Done') {
        initializeEmployee();
    } else {
        console.log('reinitialize else block executed')
    }

}


//function call to start prompting user with questions
// initializeEmployee()



module.exports = initializeEmployee;