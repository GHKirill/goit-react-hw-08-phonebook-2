import { Typography, Box } from '@mui/material';

import { useAuth } from 'components/hooks/useAuth';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box component="nav">
      <Typography
        to="/"
        variant="h5"
        color="inherit"
        component={Link}
        sx={{ marginRight: '40px' }}
      >
        Home
      </Typography>
      {isLoggedIn && (
        <Typography to="/contacts" variant="h5" component={Link}>
          Contacts
        </Typography>
      )}
    </Box>
  );
};
