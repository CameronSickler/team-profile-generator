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

async function askInternQuestions() {

    const answers = await inquirer.prompt(internQuestions);
    const intern = new Intern(answers.name, answers.ID, answers.email, answers.school);
    return intern;
}

module.exports = askInternQuestions;