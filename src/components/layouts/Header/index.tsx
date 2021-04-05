import React, { useState, useEffect } from 'react'
import { AlternativeHeaderContainer, AuthorName, HeaderContainer, OrderButtonDesktopContainer, MainHeader, OrderButtonContainer, SearchContainer, OrderButtonAndAuthorContainer } from './styles'
import PeopleIcon from '@material-ui/icons/People';
import IconButton from '@material-ui/core/IconButton';
import TextFieldSearch from '../../ui/TextFieldSearch';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import usePostActions from '../../../actions/postsActions';
import ButtonOrderList from '../../ui/ButtonOrderList';
import { useHistory, useLocation } from "react-router-dom";
import usePeopleActions from '../../../actions/peopleActions';
import { useAppSelector } from '../../../hooks/redux';
import FilterAuthor from '../FilterAuthor';
import Typography from '@material-ui/core/Typography';
import useWindowSize from '../../../hooks/windowSize';

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
    const { pathname } = useLocation()
    const { isDesktop } = useWindowSize()

    useEffect(() => {
        filterPosts(filterValue)
    }, [filterValue])

    const isAuthorPostsPath = () => {
        return pathname.includes('/author/')
    }

    const isPostDetailPath = () => {
        return pathname.includes('/post/')
    }

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
        <AlternativeHeaderContainer>
            <BackButton />
            <AuthorName>{`${selectedPerson?.name} ${selectedPerson?.lastname}'s posts`}</AuthorName>
        </AlternativeHeaderContainer>
    )

    const PostDetailHeader: React.FC = () => (
        <AlternativeHeaderContainer>
            <BackButton />
            <Typography onClick={() => handleGoBack()} variant="body2" color="primary" component="p">
                Return Home
                </Typography>

        </AlternativeHeaderContainer>
    )

    const fillFilter = () => {
        if (isSidenavOpen) {
            return <FilterAuthor />
        }
        return (
            <SearchContainer>
                <TextFieldSearch
                    onChange={onFilterChange}
                    value={filterValue}
                    placeholder="Search by Title"
                    ariaLabel="Search by publication Title" />
            </SearchContainer>
        )
    }

    const fillOrderBar = () => {
        if (isDesktop && isAuthorPostsPath()) {
            return (<OrderButtonAndAuthorContainer>
                <AuhtorHeader />
                <OrderButtonDesktopContainer>
                    {isDesktop && 'Order posts'} <ButtonOrderList />
                </OrderButtonDesktopContainer>
            </OrderButtonAndAuthorContainer>)
        }
        return <OrderButtonContainer>{isDesktop && 'Order posts'} <ButtonOrderList /></OrderButtonContainer>
    }
    const fillMainHeader = () => {
        if (!isPostDetailPath()) {
            return (
                <MainHeader accentBg={isSidenavOpen} >
                    {!isDesktop && <ToggleButtonAuthorsList />}
                    {fillFilter()}

                    {fillOrderBar()}

                </MainHeader>
            )
        }

    }

    return (
        <HeaderContainer>
            {isAuthorPostsPath() && !isDesktop && <AuhtorHeader />}
            {isPostDetailPath() && <PostDetailHeader />}
            {fillMainHeader()}

        </HeaderContainer>
    )
}
export default Header