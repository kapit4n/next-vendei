import React, { useState } from 'react'
import OrderContext from './OrderContext';
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children }) => {
    const [orderPrice, setOrderPrice] = useState(0);

    const resetorderPrice = () => {
        setOrderPrice(0)
    }

    return (
        <div>
            <Head>
                <title>My page title</title>
            </Head>
            <OrderContext.Provider value={{ orderPrice, setOrderPrice }}>
                <h1>Restaurant App</h1>
                <div>Order Price {orderPrice}</div>
                <button onClick={resetorderPrice}>SUBMIT</button>
                {children}
            </OrderContext.Provider>
            <Footer />
        </div>
    )
}

export default Layout;