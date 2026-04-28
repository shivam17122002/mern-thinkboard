import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

import { Show, SignInButton, SignOutButton, useUser } from "@clerk/react";

const Navbar = () => {
  const { user } = useUser();
  const displayName =
    user?.fullName ||
    user?.username ||
    user?.primaryEmailAddress?.emailAddress ||
    "User";
  const email = user?.primaryEmailAddress?.emailAddress;

  return (
    <header className="bg-bgAppDark">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
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

          <div>
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="bg-primary hover:opacity-90 transition px-4 py-2 rounded-lg shadow-sm transition cursor-pointer font-semibold">
                  Login
                </button>
              </SignInButton>
            </Show>

            <Show when="signed-in">
              {user && (
                <div className="flex items-center gap-2">
                  {user.imageUrl && (
                    <img
                      src={user.imageUrl}
                      alt="Profile"
                      className="w-8 h-8 rounded-full border border-gray-300"
                    />
                  )}
                  <div className="flex flex-col text-white text-sm">
                    <span>{displayName}</span>
                    {email && <span className="text-xs text-gray-300">{email}</span>}
                  </div>
                  <SignOutButton redirectUrl="/">
                    <button className="ml-2 bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded-lg shadow-sm transition cursor-pointer">
                      Logout
                    </button>
                  </SignOutButton>
                </div>
              )}
            </Show>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
