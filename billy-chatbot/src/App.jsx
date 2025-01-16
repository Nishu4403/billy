// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import ChatbotButton from './components/button'; // Ensure this component is defined correctly
import Education from './components/edu'; // Ensure this component is defined correctly
import './index.css';
import Prevention from './components/prevention';
import Map from './components/map';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div
          className="flex-grow bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: 'url(/bg.png)' }} // Use your background image here
        >
          <style>
            {`
              body {
                font-family: 'Poppins', sans-serif;
              }
              .text-shadow {
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
              }
              .text-gradient {
                background: linear-gradient(90deg, #ff6b6b, #f7d94c);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: bold;
              }
            `}
          </style>
          <Routes>
            <Route path="/" element={
              <div className="text-center">
                <h1 className="text-5xl font-bold mb-4 text-shadow text-white">Welcome to Our Chatbot</h1>
                <p className="text-xl mb-8 text-shadow text-white">How can I assist you today?</p>
                <ChatbotButton />
              </div>
            } />
            <Route path="/education" element={<Education />} />
            <Route path="/prevention" element={<Prevention />} />
            
            {/* Add more routes as needed */}
          </Routes>
        </div>
        
        <Routes>
        <Route path="/map" element={<Map />} />
        </Routes>
      </div>
      
    </Router>
  );
};

export default App;
