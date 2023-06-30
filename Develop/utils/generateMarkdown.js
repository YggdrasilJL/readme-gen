function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  } else if (license === 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if (license === 'Mozilla') {
    return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
  }
}

// TODO: Create a function that returns the license line
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0'
  }
  
}

function renderLicenseSection(license) {
   return license === 'None'
    ? ''
    : `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}


function generateMarkdown(data) {
  const tableOptions = data.table.map(option => `[${option}](#${option.toLowerCase()})\n`).join('\n')
  return `# ${data.title}\n
${renderLicenseSection(data.license)}
## Description \n
---
${data.desc}\n
## Table of Contents \n
---
${tableOptions}\n
## Installation \n
---
${data.install}\n
## Screenshots
---
![screenshot1](./path/to/screenshot)\n
## Usage \n
---
${data.usage}\n

## Contributions \n
---
${data.contrb}\n
## Testing \n
---
${data.test}\n
## Questions \n
---
[GitHub](https://github.com/${data.github}/)\n
Email: ${data.email}

`;
}

module.exports = generateMarkdown;


