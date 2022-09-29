import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contents}>
                <h2 className={styles.title}>
                    copyright(c)2022 PDxF All rights reserved
                </h2>
            </div>
        </footer>
    )
}

export default Footer