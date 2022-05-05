const inquirer = require('inquirer');
const fs = require('fs');

const askManagerQuestions = require('./Manager');
const askEngineerQuestions = require('./Engineer');
const askInternQuestions = require('./Intern');

const generateHTML = require('./generateHTML');
const generateCSS = require('./generateCSS');

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

async function initializeEmployee() {
    //inquirer prompt
    try {
        const answers = await inquirer.prompt(menuQuestion);
        currentUserSelection = answers.menuSelection;
        employeeInformationGenerator()


    } catch (error) {
        if (error.isTtyError) {

            console.log('error');

        } else {

            console.log('something else error');

        }
    }
}


//function that uses if/else to call a function depending on user choice
// Manager, Engineer, Intern, or Done

async function employeeInformationGenerator() {


    if (currentUserSelection == 'Manager') {

        const managerAdd = await askManagerQuestions();
        console.log('passed through askManagerQuestion')
        employeesArray.push(managerAdd);
        reinitialize();

    } else if (currentUserSelection == 'Engineer') {

        const engineerAdd = await askEngineerQuestions();
        console.log('passed through askEngineerQuestion')
        employeesArray.push(engineerAdd);
        reinitialize();

    } else if (currentUserSelection == 'Intern') {

        const internAdd = await askInternQuestions();
        console.log('passed through askInternQuestion')
        employeesArray.push(internAdd);
        reinitialize();

    } else {

        console.log('User selected DONE for an answer');

        const content = generateHTML(employeesArray);

        fs.writeFile('./dist/HTML.html', content, err => {
            if (err) throw err
            console.log('HTML File saved!')
        })


        generateCSS();

        fs.writeFile('./dist/styles.css', err => {
            if (err) throw err
            console.log('CSS File saved!')
        })

    }

}


//function to determine if user requested to add another employee and
//if so, calls the initialEmployee function again to loop user through

function reinitialize() {

    if (currentUserSelection !== 'Done') {

        console.log('keeping it going from reinitialize function')
        initializeEmployee();

    } else {

        console.log('reinitialize else block executed')

    }

}


module.exports = initializeEmployee

