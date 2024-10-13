import React from 'react';
import StudentItem from './StudentItem';
import '../styles/StudentList.css';

function StudentList({ students, onDelete }) {
  return (
    <div className="student-list">
      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        students.map((student) => (
          <StudentItem key={student._id} student={student} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default StudentList;
