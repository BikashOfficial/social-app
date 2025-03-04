const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db.js");
const userRoutes = require("./routes/user.route.js");

app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['set-cookie']
}));
app.use(cookieParser());
dotenv.config();
app.use(express.urlencoded({ extended: true }));
connectToDb();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Express Server!");
});

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
