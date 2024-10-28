import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import RegisterStudent from './components/RegisterStudent';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import EditStudent from './components/EditStudent';
import About from './components/About';
import Contact from './components/contact';
import Statistics from './components/Statistics';
import { StudentProvider } from './context/StudentContext';

const App = () => {
    return (
        <StudentProvider>
            <Router>
                <nav>
                    <Link to="/">Dashboard</Link>
                    <Link to="/register">Register Student</Link>
                    <Link to="/students">Student List</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/statistics">Statistics</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/register" element={<RegisterStudent />} />
                    <Route path="/students" element={<StudentList />} />
                    <Route path="/students/:id" element={<StudentDetails />} />
                    <Route path="/update/:id" element={<EditStudent />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/statistics" element={<Statistics />} />
                </Routes>
            </Router>
        </StudentProvider>
    );
};

export default App;