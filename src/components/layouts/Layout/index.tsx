import React, { useState } from 'react'
import { AUTHORS } from '../../../utils/dataDummy'
import Footer from '../Footer'
import Header from '../Header'
import SideNav from '../SideNav'

const Layout: React.FC = ({ children }) => {
    const [isSidenavOpen, setSidenavOpen] = useState(false);

    const handleSidenavToggle = () => {
        setSidenavOpen(!isSidenavOpen);
    };
    return (
        <>
            <Header handleOpenSidenav={handleSidenavToggle} isSidenavOpen={isSidenavOpen} />
            <SideNav open={isSidenavOpen} menus={AUTHORS} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
export default Layout