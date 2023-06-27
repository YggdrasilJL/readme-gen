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
         ${data.desc}\n
         ## Table of Contents \n
         ${data.table}\n
         ## Installation \n
         ${data.install}\n
         ## Usage \n
         ${data.usage}\n
         ## License \n
         ${data.license}\n
         ## Contribution \n
         ${data.contrb}\n
         ## Tests \n
         ${data.test}\n
         ## Questions \n
         ${data.quest}\n
         
`;
}

module.exports = generateMarkdown;
