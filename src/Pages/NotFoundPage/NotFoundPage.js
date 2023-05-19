import { Typography } from '@mui/material';
export default function NotFoundPage() {
  return (
    <>
      <Typography variant="h3" mt={20} mb={5} sx={{ textAlign: 'center' }}>
        Error 404
      </Typography>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Page is not found
      </Typography>
    </>
  );
}
