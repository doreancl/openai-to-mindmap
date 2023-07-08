'use client';

import Image from "next/image";
import {formatDate} from "@/lib/dates";
import {postTheme, themes} from "@/constants/post-themes";

export default function PostUI({post, theme = postTheme.main}) {
    console.log(123123, {post})
    if (!post) return null
    return (
        <>
            {post && (
                <li key={post.id} className="flex gap-2 items-start">
                    <div className="w-2/6 h-full">
                        <Image
                            src={post.image}
                            className="bg-gray-50"
                            width={400}
                            height={400}
                            alt="post image"
                        />
                    </div>
                    <div className="flex w-4/6 flex-col gap-y-1">
                        <p className="text-xs font-semibold leading-6 text-gray-900">
                            {post.category.toUpperCase()} / {formatDate(post.create_date)}
                        </p>
                        <p className={`text-lg leading-5 text-gray-500 ${themes[theme].truncate}`}>{post.title}</p>
                        {themes[theme].body && (
                            <p className={`text-sm leading-6 text-gray-900`}>{post.body}</p>
                        )}
                    </div>
                </li>
            )}
        </>
    )
}
