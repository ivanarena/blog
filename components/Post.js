import Link from 'next/link'

export default function Post({ post }) {
    return (
        <div className='post-container'>
            <h2 className='post-title'>{post.frontmatter.title}</h2>
            <h3 className='post-date'>{post.frontmatter.date}</h3>
            <p className='post-excerpt'>{post.frontmatter.excerpt}</p>

            <Link className='post-link' href={`/${post.slug}`}>
                Read more
            </Link>
        </div>

    )
}