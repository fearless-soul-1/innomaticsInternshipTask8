import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

const EditStudent = () => {
    const { id } = useParams();
    const { students, updateStudent } = useContext(StudentContext);
    const navigate = useNavigate();
    
    const [student, setStudent] = useState({ name: '', email: '', age: '', class: '', address: '', phone: '' });

    useEffect(() => {
        if (students[id]) {
            setStudent(students[id]);
        }
    }, [id, students]);

    const handleChange = (e) => setStudent({ ...student, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(id, student);
        navigate('/students');
    };

    return (
        <div className="container">
            <h2>Edit Student</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={student.name} onChange={handleChange} required />
                <input name="email" type="email" value={student.email} onChange={handleChange} required />
                <input name="age" type="number" value={student.age} onChange={handleChange} required />
                <input name="class" value={student.class} onChange={handleChange} required />
                <input name="address" value={student.address} onChange={handleChange} required />
                <input name="phone" value={student.phone} onChange={handleChange} required />
                <button type="submit">Update Student</button>
            </form>
        </div>
    );
};

export default EditStudent;