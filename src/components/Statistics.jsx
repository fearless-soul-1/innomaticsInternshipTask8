import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const Statistics = () => {
    const { students } = useContext(StudentContext);
    
    const totalStudents = students.length;
    const classCounts = students.reduce((acc, student) => {
        acc[student.class] = (acc[student.class] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="container">
            <h2>Statistics</h2>
            <p>Total Students: {totalStudents}</p>
            <h3>Students per Class:</h3>
            <ul>
                {Object.entries(classCounts).map(([className, count]) => (
                    <li key={className}>{className}: {count}</li>
                ))}
            </ul>
        </div>
    );
};

export default Statistics;