import React from 'react';
import { Button } from '@mui/material';
import useStyles from './styles';


const ButtonT = (props) => {
    const { text, variant } = props;
    const classes = useStyles();

    return (
        <Button
            variant={variant}
            className={classes.root}
        >
            {text}
        </Button>
    )
}

export default ButtonT;




