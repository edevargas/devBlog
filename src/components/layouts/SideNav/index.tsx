import React, { useState, useEffect } from 'react'
import TextFieldSearch from '../../ui/TextFieldSearch'
import { Person } from '../../../models/author'
import MenuItem from './MenuItem'
import { Ul, NavHeader, SideNavTitle } from './styles'
import { filterContains } from '../../../utils/listUtils'
type SideNavProps = {
    authors: Array<Person>,
    open: boolean
}
const SideNav: React.FC<SideNavProps> = ({ authors, open }) => {
    const [filterValue, setFilterValue] = useState('')
    const [menus, setMenus] = useState(authors)

    useEffect(() => {
        const authorsFiltered = filterContains(authors, filterValue, ['name', 'lastname'])
        setMenus(authorsFiltered)
    }, [filterValue])

    const onFilterChange = e => {
        setFilterValue(e.target.value)
    }
    return (
        <>
            { open && (
                <nav>
                    <NavHeader>
                        <SideNavTitle>Authors</SideNavTitle>
                        <TextFieldSearch
                            value={filterValue}
                            onChange={onFilterChange}
                            placeholder="Looking for author?"
                            ariaLabel="Search author" />
                    </NavHeader>
                    <Ul>
                        {menus.map(menu => (
                            <MenuItem
                                key={menu.id}
                                image={menu.image}
                                name={`${menu.name} ${menu.lastname}`}
                                id={menu.id} />
                        ))}
                    </Ul>
                </nav>
            )}
        </>)
}
export default SideNav