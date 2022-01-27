import { makeStyles } from '@mui/styles';

const useSStyles = makeStyles({
    root: {
        fontSize: 16,
    },

    primaryDefoult: {
        background: "#CDF9F4",
        color: "#00507D",

        '&:hover': {
            background: "#A8EAE2"
        }

    },

    secondaryDefoult: {
        background: "#00507D",
        color: "#ffffff",

        '&:hover': {
            background: "#003A5A"
        }
    }
});

export default useSStyles;





