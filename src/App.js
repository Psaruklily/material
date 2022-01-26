import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ButtonWithProps } from './components';
import './App.css';

const theme = createTheme({
    shadows: ["none"],
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <ButtonWithProps
                    type="secondary-default"
                    text="Secondary"
                />

                <ButtonWithProps
                    type="primary-default"
                    text="Primary"
                />
            </>
        </ThemeProvider>
    )
}

export default App;
