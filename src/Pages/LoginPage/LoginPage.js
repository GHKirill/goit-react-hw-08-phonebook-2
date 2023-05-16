import { useDispatch } from 'react-redux';
import { login } from 'redux/auth.js/operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmitForm = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      login({
        email: form.email.value,
        password: form.password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="email">
        Email
        <input id="email" name="email" type="email" autoComplete="off" />
      </label>{' '}
      <label htmlFor="password">
        Password
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="off"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginPage;
