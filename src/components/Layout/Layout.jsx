import Footer from "./Footer"
import Header from "./Header"
import styles from './Layout.module.scss'

const Layout = (props) => {
    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.main}>
                {props.children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout