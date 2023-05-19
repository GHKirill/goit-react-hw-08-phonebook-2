import { Typography, Box } from '@mui/material';
import { Link, AuthNavBox } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Box component={AuthNavBox}>
      <Typography to="/register" component={Link} sx={{ marginRight: '40px' }}>
        Register
      </Typography>
      <Typography to="/login" component={Link}>
        Login
      </Typography>
    </Box>
  );
};
