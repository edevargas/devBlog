import React from 'react'
import { HeaderContainer } from './styles'
import PeopleIcon from '@material-ui/icons/People';
import IconButton from '@material-ui/core/IconButton';
import TextFieldSearch from '../../ui/TextFieldSearch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <IconButton color="primary" aria-label="See all authors">
                <PeopleIcon fontSize="large" />
            </IconButton>
            <TextFieldSearch />
            <IconButton color="primary" aria-label="Change order by date">
                <ExpandMoreIcon fontSize="large" />
            </IconButton>
        </HeaderContainer>
    )
}
export default Header