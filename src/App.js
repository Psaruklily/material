import { ThemeProvider, createTheme } from '@mui/material/styles';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { ButtonWithProps } from './components';
import './App.css';

const theme = createTheme({
    shadows: ["none"],
})

function App() {
    return (
        <StyledEngineProvider injectFirst>
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
        </StyledEngineProvider>
    )
}

export default App;
