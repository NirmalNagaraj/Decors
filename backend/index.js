const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();

const app = express();

// Set up CORS with credentials
const corsOptions = {
  origin: ['https://www.rajadecors.in', 'https://raja-decors-omega.vercel.app'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};


// Allow requests from the specified frontend origin
app.use(cors(corsOptions));

dbURI = process.env.MONGOURI;

// Connect mongodb
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.use(express.json());

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

const userRoutes = require("./routes/userroutes");
app.use('/user', userRoutes);

const authRoutes = require("./routes/authroutes");
app.use('/auth', authRoutes);
