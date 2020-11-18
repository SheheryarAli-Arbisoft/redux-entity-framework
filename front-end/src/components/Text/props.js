import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
  gutterBottom: PropTypes.bool,
};

export const defaultProps = {
  variant: 'body1',
  gutterBottom: false,
};
