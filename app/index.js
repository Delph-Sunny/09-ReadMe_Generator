// creating variable for inquirer dependancy
const inquirer = require("inquirer");
// creating variable for file system dependancy
const fs = require("fs");
// creating variable for util in order to use promisify
const util = require("util");
// creating variable for generateMarkdown.js, which contains the function to build a ReadMe
const generateMarkdown = require("./utils/generateMarkdown");

// Function to write README file
const writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for user inputs
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
                "GNU GPL 3.0",
                "GNU LGPL 3.0",
                "MIT",     
                "MPL 2.0",
                "The Unlicense"
            ]
        }
    ])
}

// Function to initialize the app
const init = async () => {
    try {
        const answers = await promptUser();
        console.log(answers);       // FOR TESTING
        const readme = generateMarkdown(answers);
        console.log(readme);       // FOR TESTING 
        await writeFileAsync("README.md", readme);
        console.log("README.md written successfully");
    } catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();