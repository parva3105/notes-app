
const chalk = require('chalk')
const fs =require('fs')
const getNotes = () => {
    return "Your Notes..."
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes'));

    notes.forEach((note) => {
        console.log(note.title);
    })
    
}

const addNote = (title,body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote =notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title : title,
            body : body,
        })

        saveNotes(notes)
        console.log('New Note Added');
    }else{
        console.log('Note title Taken');
    }    
}

const removeNote =(title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notesToKeep.length !== notes.length){
        console.log(chalk.bgGreen.inverse('Note Removed'));
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.bgRed.inverse('No note Found'));
    }
    
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson)
}


const loadNotes =() => {
    try {
        const dataBuffer =fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e) {
        return []
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title == title)

    if(note){
        console.log(chalk.inverse.bgBlueBright(note.title));
        console.log((note.body));
    }else {
        console.log(chalk.red.inverse('Note not Found'));
    }

}



module.exports ={
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    readNote : readNote,
    listNotes : listNotes,
}