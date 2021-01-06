// creating variable for inquirer dependancy
const inquirer = require("inquirer");
// creating variable for file system dependancy
const fs = require("fs");
// creating variable for
const util = require("util");
// creating variable for generateMarkdown.js, which contains the function to build a ReadMe
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create a function to write README file
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
const promptUser = () => {
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
        console.log("README.md written successfully")   // FOR TESTING
    } catch (error) {
        console.log(error);
    }

}

// Function call to initialize app
init();