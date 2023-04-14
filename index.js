// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');

// Prompt the user for information about their project
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage instructions for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache-2.0', 'GNU GPLv3', 'ISC', 'Unlicense'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide guidelines for contributing to your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for running tests for your project:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ])
    .then((answers) => {
      // Generate the README file using the user's input
      const readme = `# ${answers.title}
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## License
  
  This project is licensed under the ${answers.license} license.
  
  ## Contributing
  
  ${answers.contributing}
  
  ## Tests
  
  ${answers.tests}
  
  ## Questions
  
  For any questions or feedback, please contact me at ${answers.email}. You can also visit my [GitHub profile](https://github.com/${answers.github}).`;
  
      // Write the README file to disk
      fs.writeFile('README.md', readme, (err) =>
        err ? console.error(err) : console.log('README created!')
      );
    });
  