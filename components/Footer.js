import React from 'react'
import styles from "../styles/components/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.items}>
                <button>
                    Products
                </button>
                
                <button>
                    Categories
                </button>

            </div>
        </footer>
    )
}

export default Footer;