const { readAll } = require("./StudentController");

const teachercontroller = {
  create(req, res) {
    res.send({
      message: "success! record created",
    });
  },
  readAll(req, res) {
    res.send({
      message: "success! 46 record found ",
    });
  },
  readOne(req, res) {
    res.send({
      message: "success! student detail found ",
    });
  },
  update(req, res) {
    res.send({
      message: "success! record has been updated ",
    });
  },
  delete(req, res) {
    res.send({
      message: "success! record deleted ",
    });
  },
};
