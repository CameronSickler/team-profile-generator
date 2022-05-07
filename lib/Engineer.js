const inquirer = require('inquirer');

const engineerQuestions = [{
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
    name: 'username',
    message: 'What is the GitHub username?'
}
]

function Engineer(name, ID, email, username) {
    this.name = name
    this.ID = ID
    this.email = email
    this.username = username
}

async function askEngineerQuestions() {

    const answers = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.username);
    return engineer;
}

module.exports = askEngineerQuestions;