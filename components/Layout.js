import React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <h1>Restaurant App</h1>
            {children}
        </div>
    )
}

export default Layout;