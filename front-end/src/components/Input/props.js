import PropTypes from 'prop-types';

export const propTypes = {
  onChange: PropTypes.func,
  variant: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  error: PropTypes.bool,
  rowsMax: PropTypes.number,
};

export const defaultProps = {
  variant: 'outlined',
  size: 'medium',
  fullWidth: false,
  multiline: false,
  error: false,
};
