// function createManager() {
//     //code block that grills down for object key values
// }

// function createEngineer() {
//     //code block that grills down for object key values
// }

// function createIntern() {
//     //code block that grills down for object key values
// }

function generateHTML(employeesArray) {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="./styles.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>

    <body>
   
        <div class="container-fluid">
            <div class="row">
                <header id="header" class="col">
                    Team Profile Builder
                </header>
            </div>
        </div>

        <div class="card" style="width: 18rem;">

            <div class="card-body">

                <h5 class="card-title">Card title</h5>

                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>

                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <a href="#" class="card-link">Card link</a>

                <a href="#" class="card-link">Another link</a>

            </div>

        </div>

    
    </body>

    </html>`

}



module.exports = generateHTML;