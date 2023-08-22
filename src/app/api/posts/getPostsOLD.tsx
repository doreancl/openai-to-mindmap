import {notFound} from 'next/navigation'
import {Post} from "@/app/api/posts/post";
import {getBaseUrl} from "@/lib/getBaseUrl";

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
//import 'server-only'

export async function getPostsOLD(size): Promise<Post[]> {

    /*
    const data = {
        name: 'John Doe',
        email: 'john.doe@example.com'
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // We intentionally disable Next.js Cache to better demo
        // `loading.js`
        //cache: 'no-cache',

        body: JSON.stringify(data)
    };
    */

    const res = await fetch(
        // We intentionally delay the response to simulate a slow data
        // request that would benefit from `loading.js`
        `${getBaseUrl()}/api/posts?size=${size}`,
    )

    if (!res.ok) {
        // Render the closest `error.js` Error Boundary
        throw new Error('Something went wrong!')
    }

    const posts: Post[] = (await res.json()) as Post[]

    if (!posts) {
        // Render the closest `not-found.js` Error Boundary
        notFound()
    }

    return posts
}

export async function getPost({slug}: { slug: string }): Promise<Post> {
    const res = await fetch(
        `${getBaseUrl()}/api/posts${slug ? `?slug=${slug}` : ''}`
    )

    if (!res.ok) {
        // Render the closest `error.js` Error Boundary
        throw new Error('Something went wrong!')
    }

    const post = (await res.json()) as Post

    if (!post) {
        // Render the closest `not-found.js` Error Boundary
        notFound()
    }

    return post
}
