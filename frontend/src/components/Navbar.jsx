import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-bgAppDark">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">
            <Link to={"/"}>ThinkBoard</Link>
          </h1>

          <div className="flex items-center gap-4">
            <Link
              to="/create"
              className="flex items-center gap-1 bg-primary px-4 py-2 rounded-full font-bold hover:opacity-90 transition"
            >
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
