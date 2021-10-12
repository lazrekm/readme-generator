// function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

    This repository is licensed under the ${license} license`;
  }
  return "";
}

// function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install dependencies, run the following:
  \`
  ${data.installation}
  \`
  ## Usage
  ${data.usage}
  ## License
  This repository is licensed under the ${data.license} license.
  ## Contributing
  ${data.contribute}
  ## Tests
  To run tests, run the following:
  \`
  ${data.tests}
  \`
  ## Questions
  Questions about this repository? Please contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHub at [${data.username}](https://github.com/${data.username}) 
  `;
  }

module.exports = generateMarkdown;
