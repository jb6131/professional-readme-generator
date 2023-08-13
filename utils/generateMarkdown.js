// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![GitHub License](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'APACHE 2.0') {
    return '![GitHub License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'GPL 3.0') {
    return '![GitHub License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'BSD 3') {
    return '![GitHub License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'APACHE 2.0') {
    return '[APACHE 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3') {
    return '[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } 
  else {
    return `## License

  This project is licensed under the ${renderLicenseLink(license)}.`;
  }
}

// TODO: Create a function to generate markdown for README
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

  To install necessary dependencies, run the following command:

  \`\`\`bash
  ${data.dependencies}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  \`\`\`bash
  ${data.tests}
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/).
`;
}

module.exports = generateMarkdown;
