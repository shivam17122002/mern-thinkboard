const Notes = require("../models/notesModels");

// GET all notes
const getNotes = async (req, res) => {
  try {
    const notes = await Notes.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes" });
  }
};

const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await Notes.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch note" });
  }
};

// CREATE a note
const createNotes = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    const note = await Notes.create({
      title,
      content,
      createdBy: null,
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error creating note" });
  }
};

// UPDATE a note
const editNotes = async (req, res) => {
  try {
    const updatedNote = await Notes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: "Error updating note" });
  }
};

// DELETE a note
const deleteNotes = async (req, res) => {
  try {
    const deletedNote = await Notes.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note" });
  }
};

module.exports = {
  getNotes,
  createNotes,
  editNotes,
  deleteNotes,
  getNoteById,
};
