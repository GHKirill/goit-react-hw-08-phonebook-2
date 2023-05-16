import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth.js/selectors';
import { useSelector } from 'react-redux';
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const isRefreshing = useSelector(selectIsRefreshing);
  return {
    isLoggedIn,
    user,
    isRefreshing,
  };
};
