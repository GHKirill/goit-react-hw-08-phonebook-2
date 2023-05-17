import React from 'react';
//import PropTypes from 'prop-types';
import IconButton from 'components/IconButton/IconButton';
import css from './ContactItem.module.css';
//import { useDeleteContactMutation } from 'redux/services';
import { useDeleteContactMutation } from 'redux/contacts/services';

export default function ContactItem({ id, name, phone }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}>{phone}</span>
      <IconButton
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
        aria-label="delete"
      ></IconButton>
    </>
  );
}

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// };
