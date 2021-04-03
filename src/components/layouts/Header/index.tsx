import React, { useState, useEffect } from 'react'
import { HeaderContainer } from './styles'
import PeopleIcon from '@material-ui/icons/People';
import IconButton from '@material-ui/core/IconButton';
import TextFieldSearch from '../../ui/TextFieldSearch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import usePostActions from '../../../actions/postsActions';
import FadeMenu from '../../ui/Menu';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

type HeaderProps = {
    handleOpenSidenav: Function,
    isSidenavOpen: boolean
}
const Header: React.FC<HeaderProps> = ({ handleOpenSidenav, isSidenavOpen }) => {
    const [filterValue, setFilterValue] = useState('')
    const [order, setOrder] = useState('ASC')
    const { filterPosts } = usePostActions()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const orderMenuOptions = [{
        name: 'Newer posts first',
        action: 'ASC'
    },
    {
        name: 'Oldest posts firt',
        action: 'DESC'
    }]
    useEffect(() => {
        filterPosts(filterValue)
    }, [filterValue])

    const onFilterChange = e => {
        setFilterValue(e.target.value)
    }

    const handleOrderChange = (action: string) => {
        setOrder(action)
        setAnchorEl(null)
    }
    const handleClickMenuOrder = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleCloseMenuOrder = () => {
        setAnchorEl(null)
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
            <IconButton
                color="primary"
                aria-label="Change order by date"
                aria-controls="order-date"
                aria-haspopup="true"
                onClick={handleClickMenuOrder}>
                {order === 'ASC'
                    ? <ExpandMoreIcon fontSize="large" />
                    : <ExpandLessIcon fontSize="large" />}
            </IconButton>
            <FadeMenu
                id="order-date"
                options={orderMenuOptions}
                notifySelection={handleOrderChange}
                anchorEl={anchorEl}
                handleClose={handleCloseMenuOrder}
            />
        </HeaderContainer>
    )
}
export default Header