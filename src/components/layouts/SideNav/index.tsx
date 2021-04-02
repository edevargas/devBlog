import React from 'react'
import { Person } from '../../../models/author'
import MenuItem from './MenuItem'
import { Ul, NavHeader } from './styles'
type SideNavProps = {
    menus: Array<Person>
}
const SideNav: React.FC<SideNavProps> = ({ menus }) => {
    return (
        <nav>
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
        </nav>
    )
}
export default SideNav