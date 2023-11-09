import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/UI/Header';
import CoursesPage from './Pages/CoursesPage';
import CoursePage from './Pages/CoursePage';
import StartGuide from './components/UI/Guide/StartGuide';

//const Section1: React.FC = () => <span>Главная</span>;

const Section3: React.FC = () => <span>Прогресс</span>;
const Section4: React.FC = () => <span>Чат</span>;
const Section5: React.FC = () => <span>Помощь</span>;

const App: React.FC = () => {
    return (
        <Router>
            <Header fullName="John Doe" avatarUrl="path/to/avatar.jpg" />
            <Routes>
                <Route path="/" element={<StartGuide />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/section3" element={<Section3 />} />
                <Route path="/section4" element={<Section4 />} />
                <Route path="/section5" element={<Section5 />} />

                <Route path="/course/:id" element={<CoursePage />} />
            </Routes>
        </Router>
    );
};

export default App;
