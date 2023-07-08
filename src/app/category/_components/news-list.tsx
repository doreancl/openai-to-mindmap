"use client";

import {Post} from "@/app/api/posts/post";
import PostUI from "@/ui/post";
import {postTheme, themes} from "@/constants/post-themes";
import {useCallback, useEffect, useState} from "react";
import {getBaseUrl} from "@/lib/getBaseUrl";
import {notFound} from "next/navigation";

export default function NewsList({theme = postTheme.main}) {
    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = useCallback(async (size) => {
        const res = await fetch(`${getBaseUrl()}/api/posts?size=${size}`,)
        if (!res.ok) {
            throw new Error('Something went wrong!')
        }
        const _posts: Post[] = (await res.json()) as Post[]
        if (!_posts) {
            notFound()
        }
        console.log("getPosts", {posts}, {_posts})
        setPosts([...posts, ..._posts])
    }, [posts]);

    useEffect(() => {
        console.log("useEffect", theme, getPosts)
        if (posts.length == 0) {
            getPosts(themes[theme].size)
        }
    }, [])

    const handleShowMorePosts = () => {
        getPosts(themes[theme].size)
    };

    return (
        <>
            {themes[theme].head && (
                <div className="flex gap-x-3">
                    <span className="px-3 py-1 bg-green-400 text-white">
                        LATEST
                    </span>
                    <span className="text-gray-500">
                    POPULAR
                </span>
                </div>
            )}
            <ul role="list" className="flex flex-col gap-y-4 divide-y divide-gray-300">
                {posts && posts.map((post: Post) => (
                    <PostUI
                        key={post.id}
                        theme={theme}
                        post={post}
                    />
                ))}
            </ul>
            <button onClick={handleShowMorePosts}>Load more</button>
        </>
    )
}
