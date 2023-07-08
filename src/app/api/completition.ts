'use server';

import {NextResponse} from "next/server";

export type Form = {
    message: string
}

export const POST = async (bodyToUse) => {
    // Make a POST request to the ChatGPT API

    console.log(bodyToUse)
    /*
    let data = null
    let error = null
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
        data = res.data;
        //return (res.data.choices[0].message.content.trim())
    } catch (e) {
        console.error(e);
        error = e
    }

     */

    // User with id exists
    /*  return error
          ? res.status(404).json({message: error})
          : res.status(200).json(data)*/
    return NextResponse.json({bodyToUse});
}
