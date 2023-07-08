'use client';

import {useCallback, useEffect, useState, useTransition} from 'react';
import axios from 'axios';
import {POST} from "@/app/api/completition";
import '@/styles/buttons.css'
export default function Chat(props) {
    const [message, setMessage] = useState(props.initialMessage);
    const [response, setResponse] = useState('');
    const [totalResponses, setTotalResponses] = useState(5);
    const [totalChildResponses, setTotalChildResponses] = useState(2);
    const [term, setTerm] = useState("code developing best practices");

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
                        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_OPENAI_KEY}` // Replace with your actual API key
                    }
                });
            setResponse("");
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
            props.onChat(response)
        }, [props.onChat]
    );
    let [isPending, startTransition] = useTransition();

    useEffect(() => {
        //doRequest()

        startTransition(async () => {
            const hola = await POST(message);
            console.log(hola)
        })
    }, [])

    return (
        <div>
            <h1>Chat with ChatGPT</h1>
            <p>
                GENERATE AN MIND MAP ABOUT {term.toUpperCase()}.<br/>
                ONLY THE TOP {totalResponses} LVL 2 AND TOP {totalChildResponses} LVL 3 FOR EVERY NODE,<br/>
                JUST THE TITLES WITHOUT DESCRIPTION, WITHOUT SPACES BETWEEN COLONS,<br/>
                THE FIRST ROW WILL BE ID,ID PARENT,TITLE, IT WILL BE READ AS CSV<br/>
                IN THIS FORMAT: ID,ID PARENT,TITLE<br/>
                WHEN THE PARENT IS EMPTY USE 0<br/>
                DONT ADD ANYTHING MORE OR NOTES<br/>
            </p>
            <br/>
            <form onSubmit={handleMessageSubmit}>
                <textarea
                    rows={6}
                    cols={90}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="button-5" type="submit">Send</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
}
