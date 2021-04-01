import React from 'react'
import { Link } from 'react-router-dom'

type SideNavProps = {
    image: string,
    name: string,
    id: number
}
const MenuItem: React.FC<SideNavProps> = ({image, name, id}) => {
    return (
            <li>
                <Link to={`/author/${id}`}>{name}</Link>
            </li>
    )
}
export default MenuItem