const inquirer = require('inquirer');

const internQuestions = [{
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
    name: 'school',
    message: 'What is the school?'
}
]

function Intern(name, ID, email, school) {
    this.name = name
    this.ID = ID
    this.email = email
    this.school = school
}

function askInternQuestions() {

    inquirer.prompt(internQuestions)
        .then(answers => {
            const intern = new Intern(answers.name, answers.ID, answers.email, answers.school);
            console.log(intern)
        })
}

module.exports = askInternQuestions;