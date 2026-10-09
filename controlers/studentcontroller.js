const StudentModel = require("../models/StudentModel");

const studentcontroller = {
  async create(req, res) {
    const body = req.body;

    const student = await StudentModel.create(body);

    res.status(201).send({
      message: "success! record created",
      data: student,
    });
  },

  async readAll(req, res) {
    const students = await StudentModel.find();
    res.send({
      message: "success! records found",
      data: students,
    });
  },

  async readOne(req, res) {
    const { id } = req.params;
    const studentDetails = await StudentModel.findById(id);

    if (!studentDetails) {
      return res.status(404).send({ message: "Student not found" });
    }

    res.send({
      message: "success! student details found",
      data: studentDetails,
    });
  },

  async update(req, res) {
    const { id } = req.params;
    const body = req.body;

    const student = await StudentModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).send({ message: "Student not found" });
    }

    res.send({
      message: "success! record has been updated",
      data: student,
    });
  },

  async delete(req, res) {
    const { id } = req.params;
    const student = await StudentModel.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).send({ message: "Student not found" });
    }

    res.send({
      message: "success! record deleted",
      data: student,
    });
  },
};

module.exports = studentcontroller;
