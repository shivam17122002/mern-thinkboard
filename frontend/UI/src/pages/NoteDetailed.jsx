import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";
import NotesNotFound from "../components/NotesNotFound";
import { ArrowLeftIcon, LoaderCircleIcon, Trash2Icon } from "lucide-react";

const NoteDetailed = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5001/api/notes/${id}`
        );
        setNote(res.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch note");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen gap-2">
        <LoaderCircleIcon className="animate-spin size-10 text-textPrimaryDark" />
        <p className="text-lg text-textMutedDark">Loading note...</p>
      </div>
    );
  }

  if (!note) return <NotesNotFound />;

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Title or Content cannot be empty!");
      return;
    }

    setSaving(true);
    try {
      await axios.put(
        `http://localhost:5001/api/notes/${id}`,
        note
      );
      toast.success("Changes saved successfully! 😁", {
        duration: 2000,
      });
      navigate("/")
    } catch (error) {
      console.log(error);
      toast.error("Failed to save note 😒");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await axios.delete(
        `http://localhost:5001/api/notes/${id}`
      );
      toast.success("Note deleted successfully 😂");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full p-2 text-textPrimaryDark hover:bg-primary/10 border border-transparent transition"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to Notes</span>
          </Link>

          <button
            onClick={handleDelete}
            className="inline-flex items-center gap-2 rounded-full p-2 text-danger hover:bg-danger/10 border border-transparent transition"
          >
            <Trash2Icon className="h-5 w-5" />
            <span>Delete Note</span>
          </button>
        </div>

        <div className="bg-bgCardDark rounded-xl p-6 mt-10">
          <h2 className="text-2xl mb-6 text-textPrimaryDark font-semibold">
            Edit Note
          </h2>

          <div className="space-y-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-textMutedDark">Title</label>
              <input
                type="text"
                value={note.title}
                onChange={(e) =>
                  setNote({ ...note, title: e.target.value })
                }
                className="bg-transparent border border-borderDark rounded-full px-4 py-2 text-textPrimaryDark"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-textMutedDark">Content</label>
              <textarea
                value={note.content}
                onChange={(e) =>
                  setNote({ ...note, content: e.target.value })
                }
                className="bg-transparent border border-borderDark rounded-lg h-32 px-4 py-3 text-textPrimaryDark resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                disabled={saving}
                onClick={handleSave}
                className={`rounded-full px-4 py-2.5 font-medium transition ${
                  saving
                    ? "bg-primary/25 cursor-not-allowed"
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailed;
