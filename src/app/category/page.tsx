import NewsList from "@/app/category/_components/news-list";
import {postTheme} from "@/constants/post-themes";

export default async function CategoryPage() {



    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-5 lg:flex-row bg-blue-500 mx-auto max-w-7xl">
                <div className="">
                    <NewsList theme={postTheme.main}/>
                </div>
                <div className="flex flex-col gap-y-4 inset-y-0">
                    <NewsList theme={postTheme.side}/>
                </div>
            </div>
            <div className="
                mx-auto max-w-7xl
                flex bg-yellow-500">
                <div className="">
                    <NewsList theme={postTheme.main}/>



                </div>
            </div>
        </div>
    )

}
