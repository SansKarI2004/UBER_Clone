require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const connectToDb = require("./db/db");
connectToDb();
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/user.routes");

const captainRoutes = require("./routes/captain.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

// app.post('/users/register', (req, res) => {
//     // Your registration logic here
//     console.log(req.body);  // Check the data being sent from the frontend
//     res.status(201).send({ message: 'User registered successfully', user: req.body });
//   });

// app.post("/captains/register", (req, res) => {
//   // Your registration logic here
//   console.log(req.body); // Check the data being sent from the frontend
//   res
//     .status(201)
//     .send({ message: "captain registered successfully", captain: req.body });
// });

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;
