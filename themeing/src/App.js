import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
  );
}

export default App;
