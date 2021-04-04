import React, { useState, useEffect } from 'react'
import { AuthorHeaderContainer, AuthorName, HeaderContainer, MainHeader } from './styles'
import PeopleIcon from '@material-ui/icons/People';
import IconButton from '@material-ui/core/IconButton';
import TextFieldSearch from '../../ui/TextFieldSearch';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import usePostActions from '../../../actions/postsActions';
import ButtonOrderList from '../../ui/ButtonOrderList';
import { useHistory } from "react-router-dom";
import usePeopleActions from '../../../actions/peopleActions';
import { useAppSelector } from '../../../hooks/redux';
import FilterAuthor from '../FilterAuthor';

type HeaderProps = {
    handleOpenSidenav: Function,
    isSidenavOpen: boolean
}
const Header: React.FC<HeaderProps> = ({ handleOpenSidenav, isSidenavOpen }) => {
    const [filterValue, setFilterValue] = useState('')
    const { filterPosts } = usePostActions()
    const { selectPerson } = usePeopleActions()
    const { selectedPerson } = useAppSelector((state) => state.people)
    let history = useHistory()


    useEffect(() => {
        filterPosts(filterValue)
    }, [filterValue])

    const onFilterChange = e => {
        setFilterValue(e.target.value)
    }
    const handleGoBack = () => {
        selectPerson(null)
        history.push("/");
    }

    const BackButton: React.FC = () => (
        <IconButton
            onClick={() => handleGoBack()}
            color="primary"
            aria-label="See all authors">
            <NavigateBeforeIcon fontSize="large" />

        </IconButton>
    )

    const ToggleButtonAuthorsList: React.FC = () => (
        <IconButton
            onClick={() => handleOpenSidenav()}
            color="primary"
            aria-label="See all authors">
            {isSidenavOpen
                ? <NavigateBeforeIcon fontSize="large" />
                : <PeopleIcon fontSize="large" />}

        </IconButton>
    )
    const AuhtorHeader: React.FC = () => (
        <AuthorHeaderContainer>
            <BackButton />
            <AuthorName>{`${selectedPerson?.name} ${selectedPerson?.lastname}'s posts`}</AuthorName>
        </AuthorHeaderContainer>
    )

    return (
        <HeaderContainer>
            {selectedPerson && <AuhtorHeader />}
            <MainHeader accentBg={isSidenavOpen} >
                <ToggleButtonAuthorsList />
                {isSidenavOpen
                    ? <FilterAuthor />
                    : <TextFieldSearch
                        onChange={onFilterChange}
                        value={filterValue}
                        placeholder="Search by Title"
                        ariaLabel="Search by publication Title" />
                }

                <ButtonOrderList />
            </MainHeader>
        </HeaderContainer>
    )
}
export default Header