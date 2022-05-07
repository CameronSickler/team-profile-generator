const inquirer = require('inquirer');
const fs = require('fs');

const askManagerQuestions = require('./Manager');
const askEngineerQuestions = require('./Engineer');
const askInternQuestions = require('./Intern');

const generateHTML = require('./generateHTML');
const generateCSS = require('./generateCSS');

//to hold created employee objects in array but not working atm
const engineersArray = [];
const managersArray = [];
const internsArray = [];

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
        managersArray.push(managerAdd);
        reinitialize();

    } else if (currentUserSelection == 'Engineer') {

        const engineerAdd = await askEngineerQuestions();
        engineersArray.push(engineerAdd);
        reinitialize();

    } else if (currentUserSelection == 'Intern') {

        const internAdd = await askInternQuestions();
        internsArray.push(internAdd);
        reinitialize();

    } else {

        const contentHTML = generateHTML(managersArray, engineersArray, internsArray);

        fs.writeFile('./dist/HTML.html', contentHTML, err => {
            if (err) throw err
            console.log('HTML File saved!')
        })


        const contentCSS = generateCSS();

        fs.writeFile('./dist/styles.css', contentCSS, err => {
            if (err) throw err
            console.log('CSS File saved!')
        })

    }

}


//function to determine if user requested to add another employee and
//if so, calls the initialEmployee function again to loop user through

function reinitialize() {

    if (currentUserSelection !== 'Done') {

        initializeEmployee();

    } else {

        console.log('Attempting to generate HTML and CSS..')
    }

}


module.exports = initializeEmployee

