import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDb from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 5001;

connectDb();


app.use(express.json());
app.use(rateLimiter);

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}


app.use("/api/notes", notesRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "../../frontend/dist"))
  );


  app.get(/.*/, (req, res) => {
    res.sendFile(
      path.join(__dirname, "../../frontend/dist/index.html")
    );
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
