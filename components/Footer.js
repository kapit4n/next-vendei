import React from 'react'
import Link from "next/link"
import styles from "../styles/components/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.items}>
                <button>
                    <Link href={"/"}>Order</Link>
                </button>
                <button>
                <Link href={"/order-products"}>Products</Link>
                </button>
                
                <button>
                    Categories
                </button>

            </div>
        </footer>
    )
}

export default Footer;