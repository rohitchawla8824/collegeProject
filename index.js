const express = require("express");
const studentcontroller = require("./controlers/StudentController");

const PORT = 8824;

const app = express();

app.get("/", (req, res) => {
  res.send("no way");
});

app.listen(PORT, () => {
  let name = "rohit chawla";
  console.log("hello & welcome to collage," + name);
  console.log("hello & welcome," + name);
  console.log(`server started at http://localhost:${PORT}`);
});

app.post("/student", studentcontroller.create);
app.get("/student", studentcontroller.readAll);
app.post("/student", studentcontroller.readOne);
app.put("/student", studentcontroller.update);
app.delete("/student", studentcontroller.delete);
