const chalk = require('chalk')
const { string } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

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
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Creating Remove Command

yargs.command({
    command: 'remove',
    describe: ' Remove a Note.',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string',
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Creating  List Command 

yargs.command({
    command : 'list',
    describe : 'Lists the Notes.',
    handler(argv) {
        notes.listNotes()
    }
})

//Creating Read Command

yargs.command({
    command : 'read',
    describe  : 'Reads from the Note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


// console.log(yargs.argv) instead

yargs.parse()