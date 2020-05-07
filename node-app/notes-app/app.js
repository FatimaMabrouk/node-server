const chalk = require('chalk');
const yargs = require('yargs');


// Costmaize varsion 
yargs.version('1.1.0');



// Challenge : add an option to yares .
//
// 1- setup the body option for the add command .
// 2- Configure a discription make it required , and for the type to be string . 
// log the body value in the handler function .



// add , remove, read, list 

// command add 
yargs.command({
    command: 'add',
    description: 'adding a note',
    builder : {
        title : {
            describe : 'add notes',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe : 'note body ...',
            demandOption: true,
            type:'string'

        }
    },
    handler: function(argv){
        console.log(chalk.green('Title :- ',  argv.title));
        console.log(chalk.blue('Body  :- ' , argv.body));
    }
});

// remove 
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


//  console.log(yargs.argv);
yargs.parse();