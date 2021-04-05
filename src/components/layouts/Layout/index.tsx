import React, { useState } from 'react'
import useWindowSize from '../../../hooks/windowSize'
import Footer from '../Footer'
import Header from '../Header'
import SideNav from '../SideNav'
import { Main } from './styles'

const Layout: React.FC = ({ children }) => {
    const [isSidenavOpen, setSidenavOpen] = useState(false);
    const { isDesktop } = useWindowSize()
    const handleSidenavToggle = () => {
        if (!isDesktop) {
            setSidenavOpen(!isSidenavOpen);
        }
    }

    return (
        <>
            <Header handleOpenSidenav={handleSidenavToggle} isSidenavOpen={isSidenavOpen} />
            <Main>
                <SideNav
                    open={isSidenavOpen}
                    notifySelection={handleSidenavToggle} />
                {children}
            </Main>
            <Footer />
        </>
    )
}
export default Layout