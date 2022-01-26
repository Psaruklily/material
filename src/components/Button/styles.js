import { makeStyles } from '@mui/styles';

const useSStyles = makeStyles({
    root: {
        '&.MuiButton-root': {
            fontSize: 16,
        }
    },

    primaryDefoult: {
        '&.MuiButton-root': {
            background: "#CDF9F4",
            color: "#00507D",

            '&:hover': {
                background: "#A8EAE2"
            }
        }
    },

    secondaryDefoult: {
        '&.MuiButton-root': {
            background: "#00507D",
            color: "#ffffff",

            '&:hover': {
                background: "#003A5A"
            }
        }
    }
});

export default useSStyles;



