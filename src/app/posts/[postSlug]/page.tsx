import Link from "next/link";
import Image from "next/image";
import {formatDate} from "@/lib/dates";
import {Post} from "@/app/api/posts/post";
import {getPost} from "@/app/api/posts/getPostsOLD";

export default async function PostSlugPage(
    {
        params,
    }: {
        params: { postSlug: string }
    }
) {
    const {postSlug} = params;

    const link = "#"
    const post: Post = await getPost({slug: postSlug});

    return (
        <>
            <li key={post.id} className="flex gap-2 items-start">
                <Link href={link} className="w-2/6 h-full">
                    <Image
                        src={post.image}
                        className="bg-gray-50"
                        width={400}
                        height={400}
                        alt="post image"
                    />
                </Link>
                <div className="flex w-4/6 flex-col gap-y-1">
                    <p className="text-xs font-semibold leading-6 text-gray-900 uppercase">
                        {post.category} / {formatDate(post.create_date)}
                    </p>
                    <Link href={link} className="">
                        <p className={`text-lg leading-5 text-gray-500`}>
                            {post.title}
                        </p>
                    </Link>
                    <p className={`text-sm leading-6 text-gray-900`}>{post.body}</p>
                </div>
            </li>
        </>
    )

}
