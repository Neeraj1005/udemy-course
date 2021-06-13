import Head from "next/head";
import Header from "./Header";
export default function Layout({title, keyword, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="keyword" content={keyword} />
                <meta name="description" content={description} />
                <link rel="favIcon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="container mx-auto my-7">{children}</main>
        </div>
    )
}


Layout.defaultProps = {
    title: 'Welcome to Neeraj Blog',
    keyword: 'development, coding, blogging, programming',
    description: 'this is description',
}