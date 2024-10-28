import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const Dashboard = () => {
    const { students } = useContext(StudentContext);
    return (
        <div className="container">
            <h2>Dashboard</h2>
            <p>Total Students: {students.length}</p>
        </div>
    );
};

export default Dashboard;