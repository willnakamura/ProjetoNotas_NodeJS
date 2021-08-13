const validator = require('validator');
const chalk = require('chalk');

const getNotes = require('./utils.js');
const fs = require('fs');

//fs.writeFileSync('note.txt', getNotes());
//console.log(getNotes());

//console.log(validator.isEmail('example.com'));
console.log(chalk.underline.red('Failed!'));
console.log(process.argv[2]);