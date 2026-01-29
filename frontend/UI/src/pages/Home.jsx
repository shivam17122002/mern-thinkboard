import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUi";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";

const Home = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [note, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log(error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {loading && (
        <div className="text-center text-primary py-10">Loading...</div>
      )}

      {!loading && isRateLimited && <RateLimitedUi />}

      {!loading && !isRateLimited && note.length === 0 && <NotesNotFound />}

      {!loading && !isRateLimited && note.length > 0 && (
        <div className="max-w-7xl mx-auto p-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {note.map((item) => (
              <NoteCard key={item._id} note={item} setNotes={setNotes} />
            ))}
          </div>
        </div>
      )}

      <div className="bottom-glow" />
    </div>
  );
};

export default Home;
