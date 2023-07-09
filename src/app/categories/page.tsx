import NewsList from "@/app/categories/_components/news-list";
import {postTheme} from "@/constants/post-themes";

export default async function CategoryPage() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-5 lg:flex-row bg-blue-500 mx-auto max-w-7xl">
                <div className="lg:w-2/3">
                    <NewsList theme={postTheme.main}/>
                </div>
                <div className="flex flex-col gap-y-4 lg:w-1/3">
                    <NewsList theme={postTheme.side}/>
                </div>
            </div>
            <div className="
                mx-auto max-w-7xl
                flex bg-yellow-500">
                <div className="flex flex-col">
                    <NewsList theme={postTheme.bottom}/>
                </div>
            </div>
        </div>
    )

}
