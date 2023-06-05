'use client';

import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

export default function Chat({onChat, initialMessage}) {
    const [message, setMessage] = useState(initialMessage);
    const [response, setResponse] = useState('');

    useEffect(() => {
        doRequest()
    }, [])

    const doRequest = async () => {
        setResponse("Loading...");
        // Make a POST request to the ChatGPT API
        try {
            const res = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    "model": "gpt-3.5-turbo",
                    "messages": [
                        {"role": "user", "content": "You are a mentor that help find the path in my personal carrier"},
                        {
                            "role": "user", "content": message
                        }
                    ],
                    max_tokens: 1000, // Adjust the response length as needed
                    temperature: 0.2 // What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.API_OPENAI_KEY}` // Replace with your actual API key
                    }
                });
            setResponse(res.data.choices[0].message.content.trim());
            callBack(res.data.choices[0].message.content.trim())
        } catch (error) {
            console.error(error);
        }

    }
    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        await doRequest()
    };

    const callBack = useCallback((response) => {
            onChat(response)
        }, [onChat]
    );

    return (
        <div>
            <h1>Chat with ChatGPT</h1>
            <form onSubmit={handleMessageSubmit}>
                <textarea
                    rows={6}
                    cols={90}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
