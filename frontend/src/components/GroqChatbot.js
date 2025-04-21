import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import botAnimation from '../animations/bot.json'; // Adjust this path as needed

function GroqChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { type: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Fetch error:', error);
    }

    setInput('');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div style={{ fontFamily: 'bold', maxWidth: '600px', margin: '2rem auto', position: 'relative' }}>
        <h1 style={{ color: '#7b8f57', marginBottom: '1rem' }}>Quick Care Bot</h1>

        {/* Chat Box */}
        <div
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            height: '300px',
            overflowY: 'auto',
            marginBottom: '1rem',
            backgroundColor: '#f9f9f9',
          }}
        >
          {messages.map((msg, index) => (
            <div key={index} style={{ margin: '0.5rem 0' }}>
              <strong style={{ color: msg.type === 'bot' ? '#7b8f57' : 'black' }}>
                {msg.type === 'bot' ? 'Bot:' : 'You:'}
              </strong>
              <div>{msg.text}</div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Section */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            style={{
              width: '80%',
              padding: '0.5rem',
              marginRight: '0.5rem',
              border: '1px solid #7b8f57',
              borderRadius: '4px',
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#7b8f57',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
        </div>
      </div>

      {/* Fixed Bot Animation in Bottom Right of Page */}
      <div style={{
        position: 'fixed',
        bottom: '5px',
        right: '20px',
        width: '270px',
        height: '270px',
        zIndex: 9999,
        pointerEvents: 'none',
      }}>
        <Lottie animationData={botAnimation} loop autoplay />
      </div>
    </>
  );
}

export default GroqChatbot;
