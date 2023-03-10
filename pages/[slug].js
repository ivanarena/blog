import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Head from 'next/head'



export default function PostPage({
    frontmatter: { title, date },
    slug,
    content
}) {
    return <>
        <Head>
            <title>{title}</title>
            <link rel="icon" type="image/x-icon" href="/public/images/favicon.ico" />
        </Head>
        <Link className='back-btn' href='/'>&larr;</Link>
        <div className='post-container'>
            <h1 className="post-title">{title}</h1>
            <h2 className="post-date">{date}</h2>
            <div className="post-content">
                <div dangerouslySetInnerHTML={{
                    __html: marked(content)
                }}></div>
            </div>
        </div>
    </>
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}