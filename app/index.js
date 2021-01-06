const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
}

const generateMD = (answers) => {

}

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

init();