import React from "react"
import "../styles/layout.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className="layout">
                <main>{children}</main>
            <Footer />
        </div>
        </React.Fragment>
    )
}

export default Layout