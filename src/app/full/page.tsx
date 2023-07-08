'use client';

import React, {useState} from 'react';
import Chat from "@/app/chat/page";
import MindMap from "@/app/mindmap/page";
import {processCSV} from "@/app/full/chat-to-mindmap";
import {initialMessage} from "@/app/chat/constants";
import styles from '@/styles/fonts.module.css';

export default function Full() {
    const [chatResponse, setChatResponse] = useState(null)
    const [mindMapId, setMindMapId] = useState(0)

    function onChat(data) {
        if (!data) return;
        const forMindMap = processCSV(data)
        setChatResponse(forMindMap)
        setMindMapId(mindMapId + 1)
    }

    return (
        <div className={styles.roboto}>
            <Chat onChat={onChat} initialMessage={initialMessage}/>
            {
                chatResponse && (
                    <MindMap key={mindMapId} chatResponse={chatResponse}/>
                )
            }
        </div>
    );
};
