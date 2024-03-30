// ChatComponent.js

import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ChatContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const MessageContainer = styled.div`
  margin-bottom: 10px;

  &.user {
    text-align: right;
    color: #007bff;
  }

  &.assistant {
    text-align: left;
    color: #28a745;
  }
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 20px;

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const ChatComponent = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo", // Example model, adjust as needed
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: input },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.zshrc.REACT_APP_OPENAI_API_KEY}`
          },
        }
      );

      // Update the conversation history with the response from ChatGPT
      setMessages(messages => [...messages, { role: 'assistant', content: response.data.choices[0].message.content }]);

      // Clear the input field
      setInput('');
    } catch (error) {
      console.error('Error making request:', error);
    }
  };

  return (
    <ChatContainer>
      <div>
        {messages.map((message, index) => (
          <MessageContainer key={index} className={message.role}>
            {message.content}
          </MessageContainer>
        ))}
      </div>
      <InputContainer>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatComponent;
