// Start with creating variables and linking them to their js cards
const inquirer = require('inquirer');
const fs = require ('fs');
const Manager = require('./cards/manager');
const Engineer = require('./cards/engineer')
const Intern = require('./cards/intern');

let employees = [];