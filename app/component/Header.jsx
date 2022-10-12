import React from 'react'
import styles from '../../styles/Header.module.scss'

const Header = ({children}) => {
  return (
    <header>
    {/* <!-- Navbar --> */}
    <nav className={styles.nav}>
        <div className={styles.container}>
            <div className={styles.navbar}>{children}
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header