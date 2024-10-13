import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './styles/App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const backendUrl = 'http://localhost:5000';

  const fetchStudents = async (page) => {
    try {
      const res = await axios.get(`${backendUrl}/api/students?page=${page}&limit=${limit}`);
      setStudents(res.data.data);
      setTotalPages(Math.ceil(res.data.meta.total / limit));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudents(page);
  }, [page]);

  const handleCreate = async (formData) => {
    try {
      await axios.post(`${backendUrl}/api/students`, formData);
      Swal.fire('Success', 'Student created successfully', 'success');
      fetchStudents(page);
    } catch (error) {
      Swal.fire('Error', 'Failed to create student', 'error');
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${backendUrl}/api/students/${id}`);
          Swal.fire('Deleted!', 'The student has been deleted.', 'success');
          fetchStudents(page);
        } catch (error) {
          Swal.fire('Error', 'Failed to delete student', 'error');
        }
      }
    });
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>
      <StudentForm onSubmit={handleCreate} />
      <StudentList students={students} onDelete={handleDelete} />
      <div className="pagination">
        {[...Array(totalPages)].map((_, i) => (
          <button key={i} onClick={() => setPage(i + 1)} className={`page-btn ${page === i + 1 ? 'active' : ''}`}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
