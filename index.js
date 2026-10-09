const express = require("express");
const studentcontroller = require("./controlers/studentcontroller");
const mongoose = require("mongoose");

const PORT = 8824;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/studentDB")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

app.get("/", (req, res) => {
  res.send("Welcome to the student server");
});

app.post("/student", studentcontroller.create);
app.get("/student", studentcontroller.readAll);
app.get("/student/:id", studentcontroller.readOne);
app.put("/student/:id", studentcontroller.update);
app.delete("/student/:id", studentcontroller.delete);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
