import "@/styles/globals.css"
import Head from "@/ui/head";
import SubMenu from "@/ui/sub-menu";
import Footer from "@/ui/footer";

export const metadata = {
    title: "WeatherGPT - ChatGPT Plugin to get the weather of any given location",
    description:
        "WeatherGPT is a ChatGPT Plugin to get the weather of any given location. Built with Next.js and served from Vercel's Edge Network.",
    twitter: {
        card: "summary_large_image",
        title:
            "WeatherGPT - ChatGPT Plugin to get the weather of any given location",
        description:
            "WeatherGPT is a ChatGPT Plugin to get the weather of any given location. Built with Next.js and served from Vercel's Edge Network.",
        creator: "@steventey",
    },
    metadataBase: new URL("https://weathergpt.vercel.app"),
    themeColor: "#FFF",
};

export default function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode;
    }) {
    return (
        <html lang="en">
        <body>
        <Head/>
        <SubMenu/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
