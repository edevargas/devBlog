import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import SideNav from '../SideNav'

const Layout: React.FC = ({children}) => {
    return (
        <>
        <Header />
        <SideNav />
        <main>
            {children}
        </main>
        <Footer />
        </>
    )
}
export default Layout