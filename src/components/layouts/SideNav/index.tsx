import React from 'react'
import MenuItem from './MenuItem'
import { Ul } from './styles'
import { useAppSelector } from '../../../hooks/redux'
type SideNavProps = {
    open: boolean,
    notifySelection: Function
}
const SideNav: React.FC<SideNavProps> = ({ open, notifySelection }) => {

    const { filteredPeople } = useAppSelector((state) => state.people)

    return (
        <>
            { open && (
                <nav>
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
                </nav>
            )}
        </>)
}
export default SideNav