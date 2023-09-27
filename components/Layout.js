import React, { useState } from 'react'
import OrderContext from './OrderContext';

const Layout = ({ children }) => {
    const [orderPrice, setOrderPrice] = useState(0);

    const resetorderPrice = () => {
        setOrderPrice(0)
    }

    return (
        <div>
            <OrderContext.Provider value={{ orderPrice, setOrderPrice }}>
                <h1>Restaurant App</h1>
                <div>Order Price {orderPrice}</div>
                <button onClick={resetorderPrice}>SUBMIT</button>
                {children}
            </OrderContext.Provider>
        </div>
    )
}

export default Layout;