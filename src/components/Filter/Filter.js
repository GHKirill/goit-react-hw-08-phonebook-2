import {
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/slice';

export default function Filter() {
  const inputFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value.toLowerCase()));
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h5" variant="h4">
            Contacts
          </Typography>
          <Typography
            component="h6"
            variant="h5"
            sx={{
              marginTop: 2,
            }}
          >
            Find Contact by Name
          </Typography>
          <TextField
            fullWidth
            variant="standard"
            type="text"
            name="filter"
            label="Find contact *"
            value={inputFilter}
            onChange={handleFilterChange}
          />
        </Box>
      </Container>
    </>
  );
}
