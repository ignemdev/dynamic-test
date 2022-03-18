import { Box } from '@mui/material'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from './helpers/theme';

import Test from './components/Test'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'primary' }} component='main'>
        <Test />
      </Box>
    </ThemeProvider>
  );
}

export default App;
