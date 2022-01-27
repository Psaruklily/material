import React from 'react';
import { Button } from '@mui/material';
import clsx from 'clsx';
import useSStyles from './styles';

const ButtonWithProps = (props) => {
    const { text, type } = props;
    const classes = useSStyles();

    const className = clsx({
        [classes.root] : true,
        [classes.primaryDefoult] : type === "primary-default",
        [classes.secondaryDefoult] : type === "secondary-default",
    })

    return (
        <Button
            variant="contained"
            className={className}
        >
            {text}
        </Button>
    )
}

export default ButtonWithProps;
