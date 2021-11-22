import Link from 'next/link'

const HomePage = () => {
    return <>
        <h1>The Home Page</h1>
        <ul>
            <li>
                <Link href="news/1">
                    NextJs is a great framework
                </Link>
            </li>
            <li>
                <Link href="news/2">
                    Something else
                </Link>
            </li>
        </ul>
    </>
}

export default HomePage