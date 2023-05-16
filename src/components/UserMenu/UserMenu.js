import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth.js/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <p>Hello, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        LogOut
      </button>
    </>
  );
};
