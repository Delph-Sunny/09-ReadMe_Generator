// creating variable for inquirer dependancy
const inquirer = require("inquirer");
// creating variable for file system dependancy
const fs = require("fs");
// creating variable for
//const util = require("util");
// creating variable for generateMarkdown.js, which contains the function to build a ReadMe
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create a function to write README file
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            // Username as user input
            type: "input",
            name: "username",
            message: "Enter your Github username:"
        },
        {
            // email as user input
            type: "input",
            name: "email",
            message: "Enter your Email address:"
        },
        {
            // project name as user input
            type: "input",
            name: "title",
            message: "Enter the project name:"
        },
        {
            // Project description as user input
            type: "input",
            name: "description",
            message: "Enter the project description:"
        },
        {
            // Installation instruction as user input
            type: "input",
            name: "installation",
            message: "Enter any installation instructions:"
        },
        {
            // Usage info as user input
            type: "input",
            name: "usage",
            message: "Enter the usage information:"
        },
        {
            // Test instruction as user input
            type: "input",
            name: "tests",
            message: "Enter any test instructions:"
        },
        {
            // Contribution info as user input
            type: "input",
            name: "contribution",
            message: "Enter the contributor names and the contribution guidelines:"
        },
        {
            // Choose with up, down and spacebar keys
            type: "list",
            name: "license",
            message: "Pick the license type:",
            choices: [
                "None",
                "Apache 2.0",
                "GPL 3.0",
                "MIT",
                "LGPL 3.0",
                "CDDL 1.0",
                "MPL 2.0"
            ]
        }
    ])
}

/* To replace with the utils generateMarkdown.js
const generateMD = (answers) => {

}

*/

// TODO: Create a function to initialize app
const init = async () => {
    try {
        const answers = await promptUser();
        console.log(answers);       // FOR TESTING
        const readme = generateMD(answers);
        console.log(readme);       // FOR TESTING 
        await fs.writeFileAsync("README.md", readme)
        console.log("README.md written successfully")
    } catch (error) {
        console.log(error);
    }

}

// Function call to initialize app
init();