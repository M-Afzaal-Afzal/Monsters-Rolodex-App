import CardList from './components/CardsList/CardsList.component';
import { Box, Typography, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box m={8} />
      <Container maxWidth='lg' align='center'>
        <Typography variant='h2'>
          Monsters Rolodex
      </Typography>
      </Container>
      <CardList />
    </ThemeProvider>
  );
}

export default App;
