import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { WatchLater } from '@material-ui/icons';
import { GridContainer, GridItem } from '../Grid';
import { Text } from '../Text';

const Wrapper = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 8px;
  padding-left: 50px;
`;

const StyledWatchLaterIcon = styled(WatchLater)`
  font-size: inherit;
`;

export const Reply = ({ replyId, comments, users }) => {
  return (
    <GridItem xs={12}>
      <Wrapper>
        <GridContainer>
          <GridItem xs={12}>
            <Text variant='body1' bold>
              {users[comments[replyId].user].name}
            </Text>
          </GridItem>
          <GridItem xs={12}>
            <Text variant='body2' color='textSecondary' alignCenter>
              <StyledWatchLaterIcon />
              {moment(comments[replyId].timestamp).fromNow()}
            </Text>
          </GridItem>
          <GridItem xs={12}>
            <Text variant='body1' gutterBottom>
              {comments[replyId].content}
            </Text>
          </GridItem>
        </GridContainer>
      </Wrapper>
    </GridItem>
  );
};

Reply.propTypes = {
  comments: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  replyId: PropTypes.string.isRequired,
};
