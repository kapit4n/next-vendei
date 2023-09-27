import React, { useState } from 'react'
import OrderContext from './context/OrderContext';
import Footer from './Footer'
import Head from 'next/head'
import styles from "../styles/components/Layout.module.css"

const Layout = ({ children }) => {
    const [orderInfo, updateOrderInfo] = useState({ products: [], totalPrice: 0 });

    const resetorderPrice = () => {
        updateOrderInfo({ products: [], totalPrice: 0 })
    }

    const displayCartInfo = () => {
        console.log(orderInfo)
    }

    return (
        <div className={styles.layout}>
            <Head>
                <title>My page title</title>
            </Head>
            <OrderContext.Provider value={{ orderInfo, updateOrderInfo }}>
                <h1>Restaurant App</h1>
                <div className={styles.navbar}>
                    <div>Order Price (<span onClick={displayCartInfo} className={styles.cartInfo}>{orderInfo?.totalPrice}</span>)</div>
                    <button onClick={resetorderPrice}>SUBMIT</button>
                </div>
                {children}
            </OrderContext.Provider>
            <Footer />
        </div>
    )
}

export default Layout;