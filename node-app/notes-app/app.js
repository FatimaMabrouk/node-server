const chalk = require('chalk');

const validator = require('validator');
const add = require('./utlis');

const result = add(2,8);
console.log(result);

console.log(validator.isEmail('onlyfef@gmail.com'));
// check the url ...
console.log(validator.isURL('http://google.com'));

// using chalk library ..
console.log(chalk.green.bold.underline('Succuses'))