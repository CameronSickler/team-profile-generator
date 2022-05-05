function generateCSS() {
    return `
    #header {
        font-weight: bold;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 35px;
        text-align: center;
        color: white;
    }
    
    .header-div {
        padding: 30px;
        background-color: red;
    }
    
    .card-div {
        margin: 20px;
    }
    `
}

module.exports = generateCSS;