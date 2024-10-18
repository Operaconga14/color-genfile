const figlet = require("figlet");
const inquirer = require('inquirer');


figlet.text(`Color - GenFile - CLI`, function (err, data) {
    if (err) {
        console.log(`Somehting Went wrong... restart your terminal try again`);
        return
    }
    console.log(data);
    console.log(`Do you want to generate a CSS Or SCSS file with different colors codes in it?
We got you covered`);
    console.log(`Answer few question and selection and leave the rest to us we should create that file for you.`);

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'framework',
                message: 'Which frame work are you working with',
                default: 'Html',
                choices: ['Html', 'Angular', 'React', 'Vue', 'Node']
            }
        ])
        .then(answers => {
            console.log(answers)
        })
})
