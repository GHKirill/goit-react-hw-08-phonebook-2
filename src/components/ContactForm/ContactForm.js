import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import React, { useState } from 'react';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/services';
import { LoaderButton } from './Loader/LoaderButton';
import { Snack } from 'components/Snack/Snack';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isSnackOpen, setSnackOpen] = useState(false);
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

  const handleSubmitForm = event => {
    event.preventDefault();
    if (checkContactAsCurrent(name)) {
      setSnackOpen(true);
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

  return (
    <>
      <Snack
        isOpen={isSnackOpen}
        handleClose={() => {
          setSnackOpen(false);
          setName('');
          setNumber('');
        }}
        name={name}
      />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h5" variant="h4">
            Phonebook
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmitForm}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  value={name}
                  id="name"
                  label="Name"
                  name="name"
                  type="text"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  autoComplete="name"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  value={number}
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  label="Phone number"
                  type="tel"
                  id="phone"
                  // autoComplete="phone"
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              sx={{ mt: 3, mb: 2 }}
            >
              {isLoading ? <LoaderButton /> : 'Add Contact'}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
