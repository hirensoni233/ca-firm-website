import { useState } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaUserCircle } from 'react-icons/fa';
import './AIChatAssistant.css';

const AIChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm your AI assistant. How can I help you with your accounting or tax needs today?", sender: "ai" }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const userMsg = input.trim();
        setMessages(prev => [...prev, { text: userMsg, sender: "user" }]);
        setInput('');

        // Simulate AI response for lead generation
        setTimeout(() => {
            let reply = "Thanks for sharing! To provide you with the best advice, could you leave your email or phone number here, and our lead CA will contact you shortly?";
            if (userMsg.toLowerCase().includes('tax')) {
                reply = "We specialize in corporate and individual tax planning. Could you please provide your contact info so we can set up a free consultation?";
            } else if (userMsg.toLowerCase().includes('bookkeeping') || userMsg.toLowerCase().includes('accounting')) {
                reply = "We offer comprehensive bookkeeping using QuickBooks and Xero. Let's connect! Please drop your email or phone number.";
            } else if (userMsg.toLowerCase().includes('@') || /[0-9]{7,}/.test(userMsg)) {
                reply = "Got it! Our team will reach out to you within 24 hours. Have a great day!";
            }

            setMessages(prev => [...prev, { text: reply, sender: "ai" }]);
        }, 1000);
    };

    return (
        <div className="chat-widget-container">
            {/* Chat Button */}
            <button
                className={`chat-toggle-btn ${isOpen ? 'hidden' : ''}`}
                onClick={() => setIsOpen(true)}
                aria-label="Open AI Chat Assistant"
            >
                <span className="chat-badge">1</span>
                <FaRobot />
            </button>

            {/* Chat Window */}
            <div className={`chat-window ${isOpen ? 'active' : ''}`}>
                <div className="chat-header">
                    <div className="chat-header-info">
                        <div className="ai-avatar"><FaRobot /></div>
                        <div>
                            <h3>AI Assistant</h3>
                            <p>Online &bull; Available</p>
                        </div>
                    </div>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>
                        <FaTimes />
                    </button>
                </div>

                <div className="chat-body">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message-wrapper ${msg.sender}`}>
                            {msg.sender === 'ai' && <FaRobot className="msg-icon ai-icon" />}
                            <div className="msg-bubble">{msg.text}</div>
                            {msg.sender === 'user' && <FaUserCircle className="msg-icon user-icon" />}
                        </div>
                    ))}
                </div>

                <div className="chat-footer">
                    <form onSubmit={handleSend} className="chat-form">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit"><FaPaperPlane /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AIChatAssistant;
