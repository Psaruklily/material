import React from 'react';
import { Button } from '@mui/material';
import useSStyles from './styles';

const ButtonWithProps = (props) => {
    const { text, type } = props;
    const classes = useSStyles();

    const dynamicClass = type === "secondary-default" ? classes.secondaryDefoult : classes.primaryDefoult;
    const className = `${classes.root} ${dynamicClass}`;

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
