import React from 'react';
import { Button } from '@mui/material';
import useSStyles from './styles';

const ButtonWithProps = (props) => {
    const { text, type } = props;
    const classes = useSStyles();
    return (
        <Button
            variant="contained"
            className={
                type === "secondary-default"
                    ? classes.secondaryDefoult
                    : classes.primaryDefoult
            }
        >
            {text}
        </Button>
    )
}

export default ButtonWithProps;

// classes.primaryDefoult