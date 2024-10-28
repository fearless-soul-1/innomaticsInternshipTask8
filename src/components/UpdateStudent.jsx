import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateStudent = () => {
    const { id } = useParams();
    const { students, updateStudent } = useContext(StudentContext);
    const navigate = useNavigate();
    const [student, setStudent] = useState(students[id]);

    const handleChange = (e) => setStudent({ ...student, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(id, student);
        navigate('/students');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={student.name} onChange={handleChange} required />
            <input name="email" type="email" value={student.email} onChange={handleChange} required />
            <input name="age" type="number" value={student.age} onChange={handleChange} required />
            <input name="class" value={student.class} onChange={handleChange} required />
            <input name="address" value={student.address} onChange={handleChange} required />
            <input name="phone" value={student.phone} onChange={handleChange} required />
            <button type="submit">Update Student</button>
        </form>
    );
};

export default UpdateStudent;