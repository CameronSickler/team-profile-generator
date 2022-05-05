function createManager() {
    //code block that grills down for object key values
}

function createEngineer() {
    //code block that grills down for object key values
}

function createIntern() {
    //code block that grills down for object key values
}

function generateHTML(employeesArray) {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="./dist/styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>

    <body>

    <div class="row">

        <div id="header" class="header col s12 center-align red lighten-3">

            <header> Team Profile Generator </header>

        </div>

    </div>

    </body>

    </html>`

}



module.exports = generateHTML;