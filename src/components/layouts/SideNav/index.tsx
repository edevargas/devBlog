import React from 'react'
import { Person } from '../../../models/author'
import MenuItem from './MenuItem'
type SideNavProps = {
    menus: Array<Person>
}
const SideNav: React.FC<SideNavProps> = ({menus}) => {
    return (
        <nav>
            <ul>
                {menus.map(menu => (
                <MenuItem
                    key={menu.id}
                    image={menu.image}
                    name={menu.name}
                    id={menu.id} />
                ))}
            </ul>
        </nav>
    )
}
export default SideNav