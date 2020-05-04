const chalk = require('chalk');
const error = chalk.green.bold.inverse;
const warnaing = chalk.keyword('black');

const validator = require('validator');
const add = require('./utlis');

const command = process.argv[2];

if( command === 'add'){
    console.log(chalk.blue.inverse('this is a add op......'));
} else if( command === 'remove'){
    console.log('removing notes ....');
}
else {
    console.log(process.argv);
}

