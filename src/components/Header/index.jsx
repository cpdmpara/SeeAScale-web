import Logo from "@assets/VerticalLogo.svg?react"

function Header() {
    
    return (
        <header className={styles.header}>
            <a className={styles.logoWraper} href="/">
                <Logo />
            </a>
            <button className={styles.accountWrapper} href="/login">
                {"로그인"}
            </button>
        </header>
    )
}

export default Header;