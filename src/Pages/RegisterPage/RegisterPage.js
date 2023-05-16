import { useDispatch } from 'react-redux';
import { register } from 'redux/auth.js/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmitForm = event => {
    event.preventDefault();
    const form = event.target;

    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    //form.reset();
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="name">
        Name
        <input id="name" name="name" type="text" autoComplete="off" />
      </label>{' '}
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
      <button type="submit">Register</button>
    </form>
  );
};
export default RegisterPage