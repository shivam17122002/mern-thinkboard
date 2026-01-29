import express from "express";
import {
  getNotes,
  getNoteById,
  createNotes,
  editNotes,
  deleteNotes,
} from "../controllers/notesControllers.js";
const router = express.Router();
router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNotes);
router.put("/:id", editNotes);
router.delete("/:id", deleteNotes);

export default router;
