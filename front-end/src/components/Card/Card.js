import React from 'react';
import { StyledCard, StyledCardContent } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';

export const Card = ({ children, ...rest }) => {
  return (
    <StyledCard {...rest}>
      <StyledCardContent>
        <Text variant='h5' gutterBottom>
          This is a title
        </Text>
        <Text variant='body2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe,
          alias nesciunt possimus cupiditate a suscipit eligendi recusandae
          harum pariatur numquam distinctio, quisquam sequi eveniet nostrum
          libero accusamus mollitia. Culpa saepe id, eaque a sed distinctio
          maiores nihil itaque accusantium eveniet eligendi assumenda
          consequuntur sequi perferendis omnis, quo temporibus? Aut!
        </Text>
      </StyledCardContent>
    </StyledCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
