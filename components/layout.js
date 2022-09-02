import Header from './Header.js'
import Footer from './Footer.js'

export default function Layout({ children, email, username }) {
    return (
        <>
            <Header
                email={email}
                username={username}
            />
            {children}
            <Footer />
        </>
    )
}
