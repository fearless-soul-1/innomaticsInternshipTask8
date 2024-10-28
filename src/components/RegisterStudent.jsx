import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useNavigate } from 'react-router-dom';

const RegisterStudent = () => {
    const { addStudent } = useContext(StudentContext);
    const navigate = useNavigate();
    const [student, setStudent] = useState({ name: '', email: '', age: '', class: '', address: '', phone: '' });

    const handleChange = (e) => setStudent({ ...student, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(student);
        navigate('/students');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
                <input name="class" placeholder="Class" onChange={handleChange} required />
                <input name="address" placeholder="Address" onChange={handleChange} required />
                <input name="phone" placeholder="Phone" onChange={handleChange} required />
                <button type="submit">Register Student</button>
            </form>
        </div>
    );
};

export default RegisterStudent;