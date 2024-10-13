const express = require('express');
const router = express.Router();
const { 
  createStudent, 
  getStudents, 
  getStudentById, 
  updateStudent, 
  deleteStudent 
} = require('../controllers/studentController'); // Import controller functions

// Create a new student
router.post('/', createStudent);

// Get all students with pagination
router.get('/', getStudents);

// Get a single student by ID
router.get('/:id', getStudentById);

// Update student information
router.put('/:id', updateStudent);

// Delete a student
router.delete('/:id', deleteStudent);

module.exports = router;
