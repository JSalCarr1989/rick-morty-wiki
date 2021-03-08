import React from 'react'
import './layout.styles.css'
import Header from '../Header/header.component'
import Footer from '../Footer/footer.component'

const Layout = ({ children }) => {

    return <div className="layout">
        <Header />
        {
            children
        }
        <Footer />

    </div>

}

export default Layout