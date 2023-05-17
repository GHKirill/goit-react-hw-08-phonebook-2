import { selectToken } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

export const useContacts = () => {
  const currentToken = useSelector(selectToken);
  console.log(currentToken);
  return {
    currentToken,
  };
};
