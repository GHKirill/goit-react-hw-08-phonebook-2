import React from 'react';
//import PropTypes from 'prop-types';
import css from './IconButton.module.css';
import { ReactComponent as DeleteIcon } from 'components/Icons/bin.svg';
import { LoaderButton } from 'components/ContactForm/Loader/LoaderButton';

export default function IconButton({
  children,
  onClick,
  disabled,
  ...allyProps
}) {
  return (
    <button
      type="button"
      className={css.iconButton}
      onClick={onClick}
      {...allyProps}
    >
      {disabled ? (
        <LoaderButton />
      ) : (
        <DeleteIcon width="15" height="15" fill="blue" />
      )}
    </button>
  );
}
// IconButton.defaultProps = {
//   onClick: () => null,
//   children: null,
// };
// IconButton.propTypes = {
//   onClick: PropTypes.func,
//   children: PropTypes.node,
//   'aria-label': PropTypes.string.isRequired,
// };
