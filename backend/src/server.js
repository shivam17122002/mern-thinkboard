require("dotenv").config();
// import cors from "cors"
const cors = require("cors")

const express = require("express");
const app = express();

const connectDb = require("./config/db");
const rateLimiter = require("./middleware/rateLimiter");

const PORT = process.env.PORT || 5001;

connectDb();

app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter);



app.use("/api/notes", require("./routes/notesRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
