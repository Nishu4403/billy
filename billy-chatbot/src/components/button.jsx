import React from 'react';

const ChatbotButton = () => {
  const handleChatbotClick = () => {
    // Logic to open the chatbot
    alert("Chatbot Opened!");
  };

  return (
    <button
      onClick={handleChatbotClick}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition"
    >
      Chat with me!
    </button>
  );
};

export default ChatbotButton;
