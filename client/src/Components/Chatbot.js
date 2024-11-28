import React, { useState } from 'react';
import './Chatbot.css'; // Import the CSS file
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = async () => {
        if (!input) return;

        setMessages((prevMessages) => [...prevMessages, { text: input, sender: 'user' }]);
        setInput('');

        try {
            const response = await fetch('https://your-api-endpoint.com/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: input }),
            });

            const data = await response.json();
            setMessages((prevMessages) => [...prevMessages, { text: data.answer, sender: 'bot' }]);
        } catch (error) {
            setMessages((prevMessages) => [...prevMessages, { text: 'Sorry, there was an error.', sender: 'bot' }]);
        }
    };

    return (
        <div className="chatbot-container">
            <div className={`chatbox ${isOpen ? 'open' : 'closed'}`}>
                {isOpen && (
                    <>
                        <div className="messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={msg.sender === 'user' ? 'userMessage' : 'botMessage'}>
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <div className="inputArea">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your question..."
                                className="inputField"
                            />
                            <button onClick={handleSend} className="sendButton">Send</button>
                        </div>
                    </>
                )}
            </div>
            <button className="toggleButton" onClick={() => setIsOpen(!isOpen)}>
                <i className={`fa ${isOpen ? 'fa-minus' : 'fa-comment'}`}></i>
            </button>
            <div className="icon-container">
                <a href="mailto:gafatsecure@gmail.com" className="icon" aria-label="Email">
                    <i className="fa fa-envelope"></i>
                </a>
                <a href="https://t.me/gafatsecurity" className="icon" aria-label="Telegram">
                    <i className="fab fa-telegram-plane"></i>
                </a>
                <a href="tel:+251913152743" className="icon" aria-label="Phone">
                    <i className="fa fa-phone"></i>
                </a>
                <a href="https://wa.me/+251913152743" className="icon" aria-label="WhatsApp">
                    <i className="fa fa-whatsapp"></i>
                </a>
                <a href="https://www.linkedin.com/in/your-profile" className="icon" aria-label="LinkedIn">
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
};

export default Chatbot;