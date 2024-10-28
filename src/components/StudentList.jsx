import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const { students, deleteStudent } = useContext(StudentContext);

    return (
        <div className="container">
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.class}</td>
                            <td>
                                <Link to={`/students/${index}`}>View</Link>
                                <Link to={`/update/${index}`}>Edit</Link>
                                <button onClick={() => deleteStudent(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
