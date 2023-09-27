import React from 'react'
import Link from "next/link"
import styles from "../styles/components/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.items}>
                <button>
                    <Link href={"/"}>Menu</Link>
                </button>
                <button>
                <Link href={"/order-items"}>Items</Link>
                </button>
                
                <button>
                    Categories
                </button>
            </div>
        </footer>
    )
}

export default Footer;