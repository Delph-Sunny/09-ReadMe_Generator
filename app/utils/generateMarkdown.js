// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ``;
  } else if (license === "Apache 2.0") {
    return `<a href="https://img.shields.io/badge/License-Apache2.0-brightgreen?style=plastic"><img alt="Apache 2.0 License used" src="https://img.shields.io/badge/License-Apache2.0-brightgreen?style=plastic"></a>`;
  } else if (license === "GNU GPL 3.0") {
    return `<a href="https://img.shields.io/badge/License-GPL3.0-brightgreen?style=plastic"><img alt="GPL 3.0 License used" src="https://img.shields.io/badge/License-GPL3.0-brightgreen?style=plastic"></a>`;
  } else if (license === "GNU LGPL 3.0") {
    return `<a href="https://img.shields.io/badge/License-LGPL3.0-brightgreen?style=plastic"><img alt="LGPL 3.0 License used" src="https://img.shields.io/badge/License-LGPL3.0-brightgreen?style=plastic"></a>`;
  } else if (license === "MIT") {
    return `<a href="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"><img alt="MIT License used" src="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"></a> `;
  } else if (license === "MPL 2.0") {
    return `<a href="https://img.shields.io/badge/License-MPL2.0-brightgreen?style=plastic"><img alt="MPL 2.0 License used" src="https://img.shields.io/badge/License-MPL2.0-brightgreen?style=plastic"></a> `;
  } else {
    return `<a href="https://img.shields.io/badge/License-TheUnlicense-brightgreen?style=plastic"><img alt="The Unlicense License used" src="https://img.shields.io/badge/License-TheUnlicense-brightgreen?style=plastic"></a>`;
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ``;
  } else if (license === "Apache 2.0") {
    return `https://choosealicense.com/licenses/apache-2.0/`;
  } else if (license === "GNU GPL 3.0") {
    return `https://choosealicense.com/licenses/gpl-3.0/`;
  } else if (license === "GNU LGPL 3.0") {
    return `https://choosealicense.com/licenses/lgpl-3.0/`;
  } else if (license === "MIT") {
    return `https://choosealicense.com/licenses/mit/`;
  } else if (license === "MPL 2.0") {
    return `https://choosealicense.com/licenses/mpl-2.0/`;
  } else {
    return `https://choosealicense.com/licenses/unlicense/`;
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, data) {
  if (license === "None") {
    return ``;
  } else {
    return `## License
    Copyright (c) 2021 ${data.username}.  
    This project is [${license}](${renderLicenseLink(license)}) licensed.`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  
<a href="https://img.shields.io/badge/javascript-100%25-blue?style=plastic"><img alt="JavaScript use" src="https://img.shields.io/badge/javascript-100%25-blue?style=plastic"></a>  
<a href="https://img.shields.io/badge/node-v12.19.0-orange?style=plastic"><img alt="Node.js use" src="https://img.shields.io/badge/node-v12.19.0-orange?style=plastic"></a>  
<a href="https://img.shields.io/badge/npm-Inquirer-red?style=plastic"><img alt="npm package Inquirer" src="https://img.shields.io/badge/npm-Inquirer-red?style=plastic"></a>  
${renderBadges(data.license)}  

## Description

${data.description} 

## Table of Contents  

* [Installation](#Installation)  
* [Usage](#Usage)  
* [License](#License)  
* [Contributing](#Contributing-)  
* [Tests] (#Tests)  
* [Questions](#Questions)  


## Installation  

${data.installation}  

###### Note: Node.js installation is required before using this app.  

## Usage  

${data.usage}  


${renderLicenseSection(data.license)}  

## Contributing  

${data.contribution}  

## Tests  

${data.tests}  

## Questions   

For questions or feedback, please contact ${data.username} at ${data.email}. 
Check out the other repository work [here](https://github.com/${data.username}/)  

---
`;
}

module.exports = generateMarkdown;
