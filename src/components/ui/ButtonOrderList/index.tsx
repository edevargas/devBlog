import React, { useState } from 'react'
import FadeMenu from '../../ui/Menu';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import usePostActions from '../../../actions/postsActions';

const ButtonOrderList: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [order, setOrder] = useState('ASC')
    const { sortPosts } = usePostActions()

    const orderMenuOptions = [{
        name: 'Newer posts first',
        action: 'DESC'
    },
    {
        name: 'Oldest posts firt',
        action: 'ASC'
    }]

    const handleOrderChange = (action: string) => {
        sortPosts(action)
        setOrder(action)
        setAnchorEl(null)
    }
    const handleClickMenuOrder = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleCloseMenuOrder = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <IconButton
                color="primary"
                aria-label="Change order by date"
                aria-controls="order-date"
                aria-haspopup="true"
                onClick={handleClickMenuOrder}>
                {order === 'DESC'
                    ? <ExpandMoreIcon fontSize="large" />
                    : <ExpandLessIcon fontSize="large" />}
            </IconButton>
            <FadeMenu
                id="order-date"
                options={orderMenuOptions}
                notifySelection={handleOrderChange}
                anchorEl={anchorEl}
                handleClose={handleCloseMenuOrder}
            />
        </>
    )

}
export default ButtonOrderList