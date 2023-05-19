import React from 'react';
import { Grid, Paper, styled } from '@mui/material';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton/IconButton';
import { useDeleteContactMutation } from 'redux/contacts/services';

export default function ContactItem({ id, name, phone }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Grid item xs={4.5}>
        <Item>{name}</Item>
      </Grid>
      <Grid item xs={5}>
        <Item>{phone}</Item>
      </Grid>
      <Grid item xs={2}>
        <IconButton
          type="button"
          disabled={isLoading}
          onClick={() => deleteContact(id)}
          aria-label="delete"
          fill="inherit"
          sx={{
            paddingTop: '11px',
            paddingBottom: '11px',
          }}
        ></IconButton>
      </Grid>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
