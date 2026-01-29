import axios from "axios";
import { PenSquare, Trash2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const formattedDate = new Date(note.createdAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!window.confirm("Are you sure?")) return;

    try {
      await axios.delete(`http://localhost:5001/api/notes/${note._id}`);
      setNotes((prev) => prev.filter((n) => n._id !== note._id));
      toast.success("Note deleted succesfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="bg-bgAppDark hover:scale-105 transition-all duration-200 border-t-4 border-primary p-4 rounded-lg block"
    >
      <h3 className="text-lg font-semibold text-textPrimaryDark">
        {note.title}
      </h3>
      <p className="text-textMutedDark mt-2">{note.content}</p>

      <div className="flex justify-between items-center mt-4 text-textMutedDark">
        <span>{formattedDate}</span>
        <div className="flex gap-3">
          <PenSquare className="size-4"></PenSquare>
          <button className="text-danger" onClick={handleDelete}>
            <Trash2Icon className="size-4"></Trash2Icon>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
