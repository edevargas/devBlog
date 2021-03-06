import React from 'react'
import { LinkContainer, IconBox, ItemIcon } from './styles'

type SideNavProps = {
    image: string,
    name: string,
    id: number,
    notifySelection: Function
}
const MenuItem: React.FC<SideNavProps> = ({ image, name, id, notifySelection }) => {

    const LiLink = ({ children }) => (
        <li>
            <LinkContainer onClick={() => notifySelection()} to={`/author/${id}`}>
                {children}
            </LinkContainer>
        </li>
    )

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