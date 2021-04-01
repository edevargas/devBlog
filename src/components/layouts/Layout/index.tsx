import React from 'react'
import { authors } from '../../../utils/dataDummy'
import Footer from '../Footer'
import Header from '../Header'
import SideNav from '../SideNav'

const Layout: React.FC = ({children}) => {
    return (
        <>
        <Header />
        <SideNav menus={authors} />
        <main>
            {children}
        </main>
        <Footer />
        </>
    )
}
export default Layout