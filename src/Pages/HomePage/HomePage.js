import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
} from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Typography
        variant="h2"
        mt={20}
        sx={{
          textAlign: 'center',
        }}
      >
        This is HomePage
      </Typography>
    </Container>
  );
};
export default HomePage;
