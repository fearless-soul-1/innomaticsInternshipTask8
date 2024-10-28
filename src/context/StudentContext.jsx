import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    
    const addStudent = (student) => setStudents([...students, student]);
    const updateStudent = (id, updatedStudent) => {
        setStudents(students.map((s, index) => (index === id ? updatedStudent : s)));
    };
    const deleteStudent = (id) => {
        setStudents(students.filter((_, index) => index !== id));
    };

    return (
        <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
            {children}
        </StudentContext.Provider>
    );
};