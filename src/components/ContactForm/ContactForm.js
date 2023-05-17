import { nanoid } from 'nanoid';
import React, { useState } from 'react';
//import { useAddContactMutation, useGetContactsQuery } from 'redux/services';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/services';
import { LoaderButton } from './Loader/LoaderButton';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetContactsQuery();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = event => {
    event.preventDefault();
    if (checkContactAsCurrent(name)) {
      alert(`${name} is already is in contacts`);
      setName('');
      setNumber('');
      return;
    }
    const fetchAddContact = async () => {
      await addContact({ name: name, number: number });
      setName('');
      setNumber('');
    };
    fetchAddContact();
  };

  const checkContactAsCurrent = newName => {
    return data.some(({ name }) => name === newName);
  };

  const styledButtonAfterClick = event => {
    event.target.classList.add(`${css.active}`);
    setTimeout(() => {
      event.target.classList.remove(`${css.active}`);
    }, 300);
  };

  const idName = nanoid();
  const idNumber = nanoid();

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={idName} className={css.formLabel}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        id={idName}
        onChange={handleInputChange}
      />
      <label htmlFor={idNumber} className={css.formLabel}>
        Phone
      </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        id={idNumber}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className={css.button}
        onClick={styledButtonAfterClick}
        disabled={isLoading}
      >
        {isLoading ? <LoaderButton /> : 'Add Contact'}
      </button>
    </form>
  );
};
