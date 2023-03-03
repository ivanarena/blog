import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <Link className='home-link' href='/'>
                <h1 className='blog-name'>La Jetée</h1>
            </Link>
        </header>
    )
}