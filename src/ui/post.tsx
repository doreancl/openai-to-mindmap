'use client';

import Image from "next/image";
import {formatDate} from "@/lib/dates";
import {postTheme, themes} from "@/constants/post-themes";
import Link from "next/link";

export default function PostUI(
    {
        theme = postTheme.main,
        post_id,
        image,
        category,
        create_date,
        title,
        body,
        link = "#"
    }
) {
    return (
        <>
            <li key={post_id} className="flex gap-2 items-start">
                <Link href={link} className="w-2/6 h-full">
                    <Image
                        src={image}
                        className="bg-gray-50"
                        width={400}
                        height={400}
                        alt="post image"
                    />
                </Link>
                <div className="flex w-4/6 flex-col gap-y-1">
                    <p className="text-xs font-semibold leading-6 text-gray-900 uppercase">
                        {category} / {formatDate(create_date)}
                    </p>
                    <Link href={link} className="">
                        <p className={`text-lg leading-5 text-gray-500 ${themes[theme].truncate}`}>
                            {title}
                        </p>
                    </Link>
                    {themes[theme].body && (
                        <p className={`text-sm leading-6 text-gray-900 line-clamp-3`}>{body}</p>
                    )}
                </div>
            </li>
        </>
    )
}
