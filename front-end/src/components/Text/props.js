import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  variant: PropTypes.string,
  gutterBottom: PropTypes.bool,
  bold: PropTypes.bool,
  alignCenter: PropTypes.bool,
  cursorPointer: PropTypes.bool,
  marginBottom: PropTypes.bool,
};

export const defaultProps = {
  variant: 'body1',
  gutterBottom: false,
  bool: false,
  alignCenter: false,
  cursorPointer: false,
  marginBottom: false,
};
