// Parsing with Yargs
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//Customizing Yargs 

//add , remove , read , list

//Creating add command

yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title : {
            describe: 'Note Title ',
            demandOption : true,
            type : 'string'

        },
        body : {
            describe : 'Note Body',
            demandOption : true,
            type : 'string,'
        }
    },
    handler: function (argv){
        console.log('Title : ' + argv['title'])
        console.log('Body : '+ argv['body']);
    }
})

//Creating Remove Command

yargs.command({
    command: 'remove',
    describe: ' Remove a Note.',
    handler : function() {
        console.log(chalk.bold('Removing Note !!!'));
    }
})

//Creating  List Command 

yargs.command({
    command : 'list',
    describe : 'Lists the Notes.',
    handler : function () {
        console.log("Listing all the Notes");
    }
})

//Creating Read Command

yargs.command({
    command : 'read',
    describe  : 'Reads from the Note',
    handler : function () {
        console.log('Reading from the Note.');
    }
})


// console.log(yargs.argv) instead

yargs.parse()




























// console.log(process.argv)
// console.log(process.argv[2])
// const command = process.argv[2]

// if(command=='add'){
//     console.log('Adding Notes');
// }else if(command == 'remove'){
//     console.log('Removing Notes');
// }
