import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <div>
                    PDxF Logo
                    <img src="img\asdf.png" alt="logo"></img>
                </div>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            메뉴 1
                        </li>
                        <li>
                            메뉴 2
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header