const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
});

const StudentModel = mongoose.model("Student", studentSchema);

module.exports = StudentModel;