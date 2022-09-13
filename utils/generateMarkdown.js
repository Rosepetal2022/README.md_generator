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
  function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description 

  ${data.description}

  ## Table of Contents

  ${data.contents}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Collaborators

  ${data.collaborators}


  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions please contact me by email or GitHub.

  Email: ${data.email}

  GitHub: https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
