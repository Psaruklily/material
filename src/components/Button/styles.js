import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        '&.MuiButton-root ': {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 10,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'black',
            height: 48,
            padding: '0 30px',
        }
    },
});

export default useStyles;


