import React, { useState, useEffect } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

type MenuItem = {
    name: string
    action: string
}
type FadeMenuProps = {
    id: string
    notifySelection: Function
    options: Array<MenuItem>,
    anchorEl: null | HTMLElement,
    handleClose: Function
}
const FadeMenu: React.FC<FadeMenuProps> = ({ id, notifySelection, options, anchorEl, handleClose }) => {
    return (
        <Menu
            id={id}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => handleClose()}
            TransitionComponent={Fade}
        >
            {options.map((option, index) => (
                <MenuItem key={index} onClick={() => notifySelection(option.action)}>{option.name}</MenuItem>
            ))}
        </Menu>
    )
}

export default FadeMenu