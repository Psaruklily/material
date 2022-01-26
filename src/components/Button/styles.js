import { makeStyles } from '@mui/styles';

const useSStyles = makeStyles({
    primaryDefoult: {
        '&.MuiButton-root': {
            fontSize: 16,
            background: "#CDF9F4",
            color: "#00507D",

            '&:hover': {
                background: "#A8EAE2"
            }
        }
    },

    secondaryDefoult: {
        '&.MuiButton-root': {
            fontSize: 16,
            background: "#00507D",
            color: "#ffffff",

            '&:hover': {
                background: "#003A5A"
            }
        }
    }
});

export default useSStyles;



