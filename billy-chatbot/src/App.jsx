import React from 'react';
import Navbar from './components/navbar';
import ChatbotButton from './components/button';
import './index.css';

const App = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
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
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold mb-4 text-shadow">Welcome to Our Chatbot</h1>
        <p className="text-xl mb-8 text-gradient">How can I assist you today?</p>
        <ChatbotButton />
      </div>
    </div>
  );
};

export default App;
