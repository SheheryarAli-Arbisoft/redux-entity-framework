import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  size: PropTypes.string,
};

export const defaultProps = {
  variant: 'contained',
  fullWidth: false,
  size: 'medium',
};
