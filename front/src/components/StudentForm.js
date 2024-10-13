import React, { useState } from 'react';
import '../styles/StudentForm.css';

function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    email: '',
    marks: [{ subject: '', mark: '' }]
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMarksChange = (e, index) => {
    const updatedMarks = [...formData.marks];
    updatedMarks[index][e.target.name] = e.target.value;
    setFormData({ ...formData, marks: updatedMarks });
  };

  const addMarkField = () => {
    setFormData({ ...formData, marks: [...formData.marks, { subject: '', mark: '' }] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} required />
      <input type="date" name="date_of_birth" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />

      <h4>Marks</h4>
      {formData.marks.map((mark, index) => (
        <div key={index} className="marks-group">
          <input type="text" name="subject" placeholder="Subject" value={mark.subject} onChange={(e) => handleMarksChange(e, index)} required />
          <input type="number" name="mark" placeholder="Mark" value={mark.mark} onChange={(e) => handleMarksChange(e, index)} required />
        </div>
      ))}
      <button type="button" onClick={addMarkField} className="add-mark-btn">Add Mark</button>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default StudentForm;
