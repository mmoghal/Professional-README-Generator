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
