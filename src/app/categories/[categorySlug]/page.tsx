import NewsList from "@/app/categories/_components/news-list";
import {postTheme} from "@/constants/post-themes";

export default async function CategorySlugPage(
    {
        params,
    }: {
        params: { categorySlug: string }
    }
) {
    const {categorySlug} = params;
    return (
        <>
            <h1 className="text-xl font-medium text-gray-400/80 capitalize">{categorySlug}</h1>
            <div className="flex flex-col">
                <div className="
                mx-auto max-w-7xl
                flex bg-yellow-500">
                    <div className="flex flex-col">
                        <NewsList theme={postTheme.bottom}/>
                    </div>
                </div>
            </div>
        </>
    )
}
