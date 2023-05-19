import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';
import { AppBar, Box, Toolbar } from '@mui/material';

export const AppBarComp = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} pl={10}>
            <Navigation />
          </Box>
          <Box pr={10}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
