const studentcontroller = {
  create(req, res) {
    res.send({
      message: "success! new records created.",
    });
  },
  readAll(req, res) {
    res.send({
      message: "success1! 46 recordes found",
    });
  },
  readOne(req, res) {
    res.send({
      message: "success! students details found",
    });
  },
  update(req, res) {
    res.send({
      message: "success! record has been updated",
    });
  },
  delete(req, res) {
    res.send({
      message: "success! record deleted",
    });
  },
};

module.exports = studentcontroller;
