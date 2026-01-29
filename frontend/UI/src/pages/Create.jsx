import axios from "axios";
import { ArrowLeftIcon, Flag } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("All feild are required");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:5001/api/notes", {
        title,
        content,
      });
      toast.success("Note Created Successfully!",{
        duration: 4000,
        icon: "👍",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response?.status === 429) {
        toast.error("Slow Down!, You'r creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note!");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-textPrimaryDark rounded-full p-2 border border-transparent hover:bg-primary/10 hover:border-primary transition-colors"
        >
          <ArrowLeftIcon className="size-5" />
          <span>Back to Notes</span>
        </Link>
        <div className="max-w-2xl mx-auto">
          <div className="max-w-xl mx-auto mt-10">
            <div className="bg-bgAppDark rounded-xl p-6">
              <h2 className="text-2xl mb-6 text-textPrimaryDark font-semibold">
                Create New Note
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Title */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-textMutedDark">Title</label>

                  <input
                    type="text"
                    placeholder="Note title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-transparent border border-borderDark rounded-full px-4 py-2 text-textPrimaryDark placeholder:text-textMutedDark transition"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-textMutedDark">Content</label>
                  <textarea
                    placeholder="Write your Note here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="bg-transparent border border-borderDark rounded-lg h-32 px-4 py-3 text-textPrimaryDark resize-none placeholder:text-textMutedDark  transition"
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                  <button type="submit" disabled={loading}>
                    {loading ? (
                      <div className="bg-primary/25 text-black font-medium py-2.5 rounded-full transition px-3">
                        Creating...
                      </div>
                    ) : (
                      <div className="bg-primary text-black font-medium py-2.5 rounded-full hover:bg-primary/90 transition px-3">
                        Create Note
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
