// function that returns a license badge 

function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// function that returns the license link

function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n * [License](#license)\n`;
  }
  return "";
}

// function that returns the license section of README

function renderLicenseSection(license) {
  if (license !== "None") {
    return `

    This repository is licensed under the ${license} license`;
  }
  return "";
}

// function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.projectName}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.projectDescription}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  To install dependencies, run the following:

  \`
  ${data.installation}
  \`
  
  ## Usage
  ${data.repoUsage}
  ## License
  ${renderLicenseSection(data.license)} 
  ## Contributing
  ${data.contribution}
  ## Tests
  To run tests, run the following:
  \`
  ${data.test}
  \`
  ## Questions
  Questions about this repository? Please contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHub at [${data.userName}](https://github.com/lazrekm) 
  `;
  }

module.exports = generateMarkdown;
