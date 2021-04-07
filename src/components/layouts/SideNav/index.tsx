import React from 'react'
import MenuItem from './MenuItem'
import { Nav, Ul, SearchContainer } from './styles'
import { useAppSelector } from '../../../hooks/redux'
import FilterAuthor from '../FilterAuthor'
import useWindowSize from '../../../hooks/windowSize'
type SideNavProps = {
    open: boolean,
    notifySelection: Function
}
const SideNav: React.FC<SideNavProps> = ({ open, notifySelection }) => {
    const { isDesktop } = useWindowSize()

    const { filteredPeople } = useAppSelector((state) => state.people)

    return (
        <>
            { (open || isDesktop) && (
                <Nav>
                    {isDesktop && <SearchContainer>
                        <FilterAuthor />
                    </SearchContainer>}
                    <Ul>
                        {filteredPeople.map(menu => (
                            <MenuItem
                                key={menu.id}
                                image={menu.image}
                                name={`${menu.name} ${menu.lastname}`}
                                id={menu.id}
                                notifySelection={notifySelection} />
                        ))}
                    </Ul>
                </Nav>
            )}
        </>)
}
export default SideNav