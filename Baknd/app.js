const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db.js");
const userRoutes = require("./routes/user.route.js");

app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: "https://socialapp-c4ef.onrender.com",
    credentials: true,
    methods: ["GET", "POST", "PUT","DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["set-cookie"],
  })
);
app.use(cookieParser());
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
