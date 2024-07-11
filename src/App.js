import logo from './logo.svg';
import './App.css';
import {Box, Stack, ThemeProvider, Typography} from "@mui/material";
import {theme} from "./config/MuiTheme";
import TimeCounter from "./components/TimeCounter";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
      <ThemeProvider theme={theme} >
          <Stack sx={{
              alignItems: 'center',
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
              height:'100%',
              minHeight:'100vh',
              padding: '12% 4% 12% 4%',
              overflowX: 'none',
              maxWidth: '100vw',
          }}>
              <Typography variant={'h1'}>Feliz</Typography>
              <Typography variant={'h1'}>Aniversario</Typography>
              <TimeCounter/>
              <ImageSlider/>
          </Stack>

      </ThemeProvider>

  );
}

export default App;
