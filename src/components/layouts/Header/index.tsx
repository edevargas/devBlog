import React, { useState, useEffect } from 'react'
import { HeaderContainer } from './styles'
import PeopleIcon from '@material-ui/icons/People';
import IconButton from '@material-ui/core/IconButton';
import TextFieldSearch from '../../ui/TextFieldSearch';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import usePostActions from '../../../actions/postsActions';
import ButtonOrderList from '../../ui/ButtonOrderList';


type HeaderProps = {
    handleOpenSidenav: Function,
    isSidenavOpen: boolean
}
const Header: React.FC<HeaderProps> = ({ handleOpenSidenav, isSidenavOpen }) => {
    const [filterValue, setFilterValue] = useState('')
    const { filterPosts } = usePostActions()



    useEffect(() => {
        filterPosts(filterValue)
    }, [filterValue])

    const onFilterChange = e => {
        setFilterValue(e.target.value)
    }

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
            <TextFieldSearch
                onChange={onFilterChange}
                value={filterValue}
                placeholder="Search by Title"
                ariaLabel="Search by publication Title" />
            <ButtonOrderList />
        </HeaderContainer>
    )
}
export default Header