import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.node,
  startIcon: PropTypes.node,
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  marginBottom: PropTypes.bool,
  displayNone: PropTypes.bool,
};

export const defaultProps = {
  variant: 'contained',
  size: 'medium',
  color: 'primary',
  fullWidth: false,
  marginBottom: false,
  displayNone: false,
};
