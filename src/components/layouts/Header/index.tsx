import React, { useState } from 'react'
import { HeaderContainer } from './styles'
import PeopleIcon from '@material-ui/icons/People';
import IconButton from '@material-ui/core/IconButton';
import TextFieldSearch from '../../ui/TextFieldSearch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

type HeaderProps = {
    handleOpenSidenav: Function,
    isSidenavOpen: boolean
}
const Header: React.FC<HeaderProps> = ({ handleOpenSidenav, isSidenavOpen }) => {
    const fillLefttButton = () => (
        <IconButton
            onClick={() => handleOpenSidenav()}
            color="primary"
            aria-label="See all authors">
            {isSidenavOpen
                ? <NavigateBeforeIcon fontSize="large" />
                : <PeopleIcon fontSize="large" />}

        </IconButton>
    )
    return (
        <HeaderContainer>
            {fillLefttButton()}
            <TextFieldSearch placeholder="Search by Title" ariaLabel="Search by publication Title" />
            <IconButton color="primary" aria-label="Change order by date">
                <ExpandMoreIcon fontSize="large" />
            </IconButton>
        </HeaderContainer>
    )
}
export default Header