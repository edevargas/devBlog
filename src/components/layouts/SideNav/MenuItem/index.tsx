import React from 'react'
import { LiLink, IconBox, ItemIcon } from './styles'

type SideNavProps = {
    image: string,
    name: string,
    id: number
}
const MenuItem: React.FC<SideNavProps> = ({ image, name, id }) => {
    return (
        <LiLink>
            <IconBox>
                <ItemIcon>
                    <img src={image} alt={`${name}'s profile photo`} />
                </ItemIcon>
            </IconBox>
            <span>
                {name}
            </span>
        </LiLink>
    )
}
export default MenuItem