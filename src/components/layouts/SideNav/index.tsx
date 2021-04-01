import React from 'react'
import { Person } from '../../../models/author'
import MenuItem from './MenuItem'
import { Nav, Ul, NavHeader } from './styles'
type SideNavProps = {
    menus: Array<Person>
}
const SideNav: React.FC<SideNavProps> = ({ menus }) => {
    return (
        <Nav>
            <NavHeader>
                <h3>Ahtors</h3>
                <input type="text" />
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
        </Nav>
    )
}
export default SideNav