import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import styled from 'styled-components';
import { WatchLater } from '@material-ui/icons';
import { Reply } from './Reply';
import { GridContainer, GridItem } from '../Grid';
import { Text } from '../Text';
import { CreateReplyForm } from '../Forms';

const Wrapper = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 8px;
  padding-left: 30px;
`;

const StyledWatchLaterIcon = styled(WatchLater)`
  font-size: inherit;
`;

export const Comment = ({ commentId, comments, users }) => {
  const [showInput, setShowInput] = useState(false);
  const currentComment = comments[commentId];

  return (
    <GridItem xs={12}>
      <Wrapper>
        <GridContainer>
          <GridItem xs={12}>
            <Text variant='body1' bold>
              {users[currentComment.user].name}
            </Text>
          </GridItem>

          <GridItem xs={12}>
            <Text variant='body2' color='textSecondary' alignCenter>
              <StyledWatchLaterIcon />
              {moment(currentComment.timestamp).fromNow()}
            </Text>
          </GridItem>

          <GridItem xs={12}>
            <Text variant='body1' gutterBottom>
              {currentComment.content}
            </Text>
          </GridItem>

          {!showInput && (
            <GridItem xs={12}>
              <Text
                variant='body2'
                color='textSecondary'
                cursorPointer
                gutterBottom
                onClick={() => setShowInput(true)}
              >
                Reply
              </Text>
            </GridItem>
          )}

          {showInput && (
            <GridItem xs={12}>
              <CreateReplyForm commentId={commentId} />
            </GridItem>
          )}

          {_.map(currentComment.replies, replyId => (
            <Reply
              key={replyId}
              replyId={replyId}
              comments={comments}
              users={users}
            />
          ))}
        </GridContainer>
      </Wrapper>
    </GridItem>
  );
};

Comment.propTypes = {
  comments: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  commentId: PropTypes.string.isRequired,
};
