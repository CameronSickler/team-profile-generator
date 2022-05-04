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

function askEngineerQuestions() {

    inquirer.prompt(engineerQuestions)
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.username);
            console.log(engineer)
        })
}

module.exports = askEngineerQuestions;