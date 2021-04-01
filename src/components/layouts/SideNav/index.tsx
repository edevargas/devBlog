import React from 'react'
import { Link } from 'react-router-dom'

const SideNav: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/author/1">Eren Jeager</Link></li>
                <li><Link to="/author/2">Levi Ackerman</Link></li>
                <li><Link to="/author/3">Mikasa Ackerman</Link></li>
                <li><Link to="/author/4">Armin Alert</Link></li>
                <li><Link to="/author/5">Erwin Smith</Link></li>
                <li><Link to="/author/6">Annie Leonhart</Link></li>
            </ul>
        </nav>
    )
}
export default SideNav