import Link from 'next/link'

export default function Post({ post }) {
    return (
        <div className='post-container'>
            <h1 className='post-title'>{post.frontmatter.title}</h1>
            <h2 className='post-date'>{post.frontmatter.date}</h2>
            <p className='post-excerpt'>{post.frontmatter.excerpt}</p>

            <Link className='post-link' href={`/${post.slug}`}>
                Read more &rarr;
            </Link>
        </div>

    )
}