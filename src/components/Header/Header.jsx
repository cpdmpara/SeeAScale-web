import VerticalLogo from "@assets/VerticalLogo.svg?react"
import styles from "@components/Header/Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logoButton}>
                <VerticalLogo className={styles.logo} />
            </a>
            <a href="/logIn" className={styles.login}>로그인</a>
        </header>
    )
}

export default Header;