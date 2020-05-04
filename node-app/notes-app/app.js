const chalk = require('chalk');

const error = chalk.red.bold;
const warnaing = chalk.keyword('black');


const validator = require('validator');
const add = require('./utlis');

const result = add(2,8);
console.log(result);

console.log(validator.isEmail('onlyfef@gmail.com'));
// check the url ...
console.log(validator.isURL('http://google.com'));

// using chalk library ..
console.log(chalk.green.bold.underline('Succuses'));

console.log(error('faild not working .......'));
console.log(warnaing);