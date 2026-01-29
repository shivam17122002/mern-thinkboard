import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="size-10 text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-textPrimaryDark">No notes yet</h3>
      <p className="text-textPrimaryDark/70">
        Ready to organize your thoughts? Create your first note to get started
        on your journey.
      </p>
      <Link
        to="/create"
        className="flex items-center gap-1 bg-primary px-2 py-1 rounded-full font-bold hover:opacity-90 transition"
      >
        <span>Create Your First Note</span>
      </Link>
    </div>
  );
};
export default NotesNotFound;
