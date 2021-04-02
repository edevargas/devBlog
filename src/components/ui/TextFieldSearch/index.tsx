import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
}));
type TextFieldSearchProps = {
    placeholder: string;
    ariaLabel: string;
}
const TextFieldSearch: React.FC<TextFieldSearchProps> = ({ placeholder, ariaLabel }) => {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root} >
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder={placeholder}
                inputProps={{ 'aria-label': ariaLabel }}
            />
        </Paper>
    );
}
export default TextFieldSearch