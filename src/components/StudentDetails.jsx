import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

const StudentDetails = () => {
    const { id } = useParams();
    const { students } = useContext(StudentContext);
    const student = students[id];

    return (
        <div>
            <h2>Student Details</h2>
            {student ? (
                <div>
                    <p>Name: {student.name}</p>
                    <p>Email: {student.email}</p>
                    <p>Age: {student.age}</p>
                    <p>Class: {student.class}</p>
                    <p>Address: {student.address}</p>
                    <p>Phone: {student.phone}</p>
                </div>
            ) : (
                <p>Student not found</p>
            )}
        </div>
    );
};

export default StudentDetails;