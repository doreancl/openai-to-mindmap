"use client";

import {Post} from "@/app/api/posts/post";
import PostUI from "@/ui/post";
import {postTheme, themes} from "@/constants/post-themes";
import {useCallback, useEffect, useState} from "react";
import {getPosts} from "@/app/api/posts/getPosts";

export default function NewsList({theme = postTheme.main}) {
    const [posts, setPosts] = useState<Post[]>([]);

    const _getPosts = useCallback(async (size) => {
        //const _posts = await getPosts(size) as Post[];
        const _posts: Post[] = (await getPosts(size)) as Post[]
        setPosts([...posts, ..._posts])
    }, [posts]);

    useEffect(() => {
        if (posts.length == 0) {
            _getPosts(themes[theme].size)
        }
    }, [])

    const handleShowMorePosts = () => {
        _getPosts(themes[theme].size)
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
                        link={`/posts/${post.id}`}
                        post_id={post.id}
                        image={post.image}
                        category={post.category}
                        create_date={post.create_date}
                        title={post.title}
                        body={post.body}
                    />

                ))}
            </ul>
            {themes[theme].loadMore && (
                <button onClick={handleShowMorePosts}
                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 my-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Load more
                </button>
            )}
        </>
    )
}
