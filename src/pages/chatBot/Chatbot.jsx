import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! How can I assist you today?" }]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      const userMessage = { sender: "user", text: input };

      // Simulated bot response based on user's input
      const botResponse = generateBotResponse(input);

      setMessages([...messages, userMessage, botResponse]);
      setInput("");
    }
  };

  const generateBotResponse = (inputText) => {
    let botReply = "I'm sorry, I don't understand that.";
    
    if (inputText.toLowerCase().includes("hello")) {
      botReply = "Hi there! How can I help you?";
    } else if (inputText.toLowerCase().includes("help")) {
      botReply = "Sure! I'm here to assist you. What do you need help with?";
    } else if (inputText.toLowerCase().includes("thank you")) {
      botReply = "You're welcome! If you need anything else, feel free to ask.";
    }

    return { sender: "bot", text: botReply };
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          <FiMessageSquare size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 md:w-96 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Chat with us</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-300">
              <AiOutlineCloseCircle size={24} />
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex flex-col h-64 overflow-y-auto p-4 bg-gray-100 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-lg p-3 text-sm ${
                    message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} // Send message on Enter key press
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
