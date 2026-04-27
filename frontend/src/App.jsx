import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NoteDetailed from "./pages/NoteDetailed";

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Radial background (UNCHANGED) */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 16%, #000 55%, rgb(42,255,102) 100%)",
        }}
      />

      {/* Grid overlay (same color family, transparent) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(42,255,102,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(42,255,102,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* App content */}
      <div className="relative z-10 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/note/:id" element={<NoteDetailed />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
