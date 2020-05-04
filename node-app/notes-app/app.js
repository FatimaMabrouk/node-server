const chalk = require('chalk');
const yargs = require('yargs');


// Costmaize varsion 
yargs.version('1.1.0');

// add , remove, read, list 

// command add 
yargs.command({
    command: 'add',
    description: 'adding a note',
    handler: function(){
        console.log('adding a new notes');
    }
});

yargs.command({
    command: 'remove',
    description: 'remove note',
    handler: function(){
        console.log('removing a note ........');
    }
})

// Chalenges for list & read 

// read .
yargs.command({
    command: 'read',
    description: 'read a note',
    handler: function(){
        console.log(chalk.blue(' reading a new notes .....'));
    }
});

// list.
yargs.command({
    command: 'list',
    description: 'list a note',
    handler: function(){
        console.log(chalk.green('listing all the notes ....'))
    }
});


console.log(yargs.argv);