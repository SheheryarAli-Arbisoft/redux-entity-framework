import PropTypes from 'prop-types';

export const propTypes = {
  onChange: PropTypes.func,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string,
  required: PropTypes.bool,
};

export const defaultProps = {
  variant: 'outlined',
  fullWidth: false,
  multiline: false,
  required: false,
};
