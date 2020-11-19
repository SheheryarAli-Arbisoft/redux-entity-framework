import PropTypes from 'prop-types';

export const propTypes = {
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  name: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

export const defaultProps = {
  variant: 'outlined',
  fullWidth: false,
  multiline: false,
};
