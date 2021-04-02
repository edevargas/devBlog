import TextFieldSearch from '../../ui/TextFieldSearch'
import React from 'react'
import { Person } from '../../../models/author'
import MenuItem from './MenuItem'
import { Ul, NavHeader, SideNavTitle } from './styles'
type SideNavProps = {
    menus: Array<Person>
}
const SideNav: React.FC<SideNavProps> = ({ menus }) => {
    return (
        <nav>
            <NavHeader>
                <SideNavTitle>Authors</SideNavTitle>
                <TextFieldSearch placeholder="Looking for author?" ariaLabel="Search author" />
            </NavHeader>
            <Ul>
                {menus.map(menu => (
                    <MenuItem
                        key={menu.id}
                        image={menu.image}
                        name={menu.name}
                        id={menu.id} />
                ))}
            </Ul>
        </nav>
    )
}
export default SideNav