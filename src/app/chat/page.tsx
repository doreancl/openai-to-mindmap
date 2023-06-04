'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to the ChatGPT API
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          "model": "gpt-3.5-turbo",
          "messages": [{"role": "user", "content": message}],
          max_tokens: 50, // Adjust the response length as needed
          temperature: 0.7 // Adjust the temperature to control response randomness
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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' // Replace with your actual API key
          }
        });

      setResponse(response.data.choices[0].message.content.trim());
    } catch (error) {
      console.error(error);
    }

    setMessage('');
  };

  return (
    <div>
      <h1>Chat with ChatGPT</h1>
      <form onSubmit={ handleMessageSubmit }>
        <input
          type="text"
          value={ message }
          onChange={ (e) => setMessage(e.target.value) }
        />
        <button type="submit">Send</button>
      </form>
      { response && <p>{ response }</p> }
    </div>
  );
}
