const notesCtrl = {};

const Note = require('../models/Note')


// GET ALL
notesCtrl.getNotes = async(req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

// POST
notesCtrl.createNote = async(req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    });
    await newNote.save();
    res.json({ mesage: 'Note Saved' });
};


// GET BY ID
notesCtrl.getNote = async(req, res) => {

    const note = await Note.findById(req.params.id);
    console.log(note)
    res.json(note);
};

// UPDATE
notesCtrl.updateNote = async(req, res) => {
    const { title, author, content } = req.body;
    await Note.findOneAndUpdate({ _id: req.params.id }, {
        title,
        author,
        content
    });
    res.json({ message: 'Note Updated' })
}


// DELETE
notesCtrl.deleteNote = async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note Deleted!' })
}

module.exports = notesCtrl;