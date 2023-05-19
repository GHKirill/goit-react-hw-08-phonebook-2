import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { ReactComponent as DeleteIcon } from 'components/Icons/bin.svg';
import { LoaderButton } from 'components/ContactForm/Loader/LoaderButton';

export default function IconButton({
  children,
  onClick,
  disabled,
  ...allyProps
}) {
  return (
    <Button
      type="button"
      fullWidth
      variant="contained"
      onClick={onClick}
      {...allyProps}
    >
      {disabled ? (
        <LoaderButton />
      ) : (
        <DeleteIcon width="15" height="15" fill="white" />
      )}
    </Button>
  );
}
IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
