// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'No License'){
    return`![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
  } 
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `https://www.mit.edu/~amini/LICENSE.md`
  } else if (license === 'Apache') {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  } else if (license === 'GNU AGPLv3') {
    return `https://www.gnu.org/licenses/agpl-3.0.en.html`
  } else {
    return ''
  };
};

// TODO: Create a function that returns the license section of README
//If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license) {
      return ``;
    } else {
      return `
      This project is covered under the ${license} license. To learn more about what this means, click the link above.`
    }
  };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Collaborators](#collaborators)
  * [Licenses](#license)
  * [Tests](#tests)
  * [Questions](#email)
  
  
  ## Description 

  ${data.description}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Collaborators

  ${data.collaborators}

  ## License 

  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}


  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions please contact me by email or GitHub.

  Email: ${data.email}

  GitHub: https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
