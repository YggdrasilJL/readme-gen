// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
         ## Description \n
         ${data.desc}
         ## Table of Contents \n
         ${data.tableOfC}
         ## Installation \n
         ${data.install}
         ## Usage \n
         ${data.usage}
         ## License \n
         ${data.license}
         ## Contribution \n
         ${data.contrb}
         ## Tests \n
         ${data.tests}
         ## Questions \n
         ${data.quest}
         
`;
}

module.exports = generateMarkdown;
