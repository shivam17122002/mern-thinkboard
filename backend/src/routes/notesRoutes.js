const express = require("express");
const router = express.Router();
const {getNotes, getNoteById, createNotes,editNotes,deleteNotes} = require("../controllers/notesControllers")

router.get("/",getNotes) 
router.get("/:id", getNoteById);
router.post("/",createNotes) 
router.put("/:id",editNotes) 
router.delete("/:id",deleteNotes) 

module.exports = router



