import React from 'react';
import '../styles/StudentItem.css';

function StudentItem({ student, onDelete }) {
  return (
    <div className="student-item">
      <h3>{student.first_name} {student.last_name}</h3>
      <p>Email: {student.email}</p>
      <p>DOB: {new Date(student.date_of_birth).toLocaleDateString()}</p>
      <h4>Marks</h4>
      <ul>
        {student.marks.map((mark, index) => (
          <li key={index}>{mark.subject}: {mark.mark}</li>
        ))}
      </ul>
      <button className="delete-btn" onClick={() => onDelete(student._id)}>Delete</button>
    </div>
  );
}

export default StudentItem;
