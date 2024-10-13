const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  date_of_birth: { type: Date },
  email: { type: String, unique: true, required: true },
  marks: [{
    subject: { type: String, required: true },
    mark: { type: Number, min: 0, max: 100, required: true }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
