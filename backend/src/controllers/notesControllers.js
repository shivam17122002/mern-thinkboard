import Notes from "../models/notesModels.js";

export const getNotes = async (req, res) => {
  const notes = await Notes.find();
  res.json(notes);
};

export const getNoteById = async (req, res) => {
  const note = await Notes.findById(req.params.id);
  res.json(note);
};

export const createNotes = async (req, res) => {
  const { title, content } = req.body;
  const note = await Notes.create({ title, content });
  res.status(201).json(note);
};

export const editNotes = async (req, res) => {
  const note = await Notes.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(note);
};

export const deleteNotes = async (req, res) => {
  await Notes.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
