import { Grid, Container, Typography } from '@mui/material';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/services';
import { Loader } from 'components/ContactForm/Loader/Loader';

export default function ContactList() {
  const filter = useSelector(state => state.filter);
  const { data, error, isLoading } = useGetContactsQuery();

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <Typography>
          {' '}
          Error. Unfortunatly we can't get information from server
        </Typography>
      )}
      {data?.length && (
        <Container maxWidth="sm">
          <Grid
            container
            spacing={3}
            gap={2}
            sx={{
              marginTop: 8,
            }}
          >
            {data
              .filter(({ name }) =>
                name.toLowerCase().includes(filter.toLowerCase())
              )
              .map(({ id, name, number }) => (
                <Grid container key={id}>
                  <ContactItem
                    name={name}
                    phone={number}
                    id={id}
                    sx={{
                      paddingBottom: 2,
                    }}
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
      )}
    </>
  );
}
