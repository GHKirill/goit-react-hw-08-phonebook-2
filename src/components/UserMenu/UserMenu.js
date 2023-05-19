import { Typography, Button, Box } from '@mui/material';
import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth.js/operations';
import { UserMenuBox } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Box component={UserMenuBox}>
      <Typography sx={{ marginRight: '40px' }}>{user.email}</Typography>
      <Button color="inherit" onClick={handleLogOut}>
        LogOut
      </Button>
    </Box>
  );
};
