import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Comment } from './Comment';
import { CommentItem } from '../../Api/hnApi';

export const Comments = ({ comment }: { comment: CommentItem}) => {

  return (
    <AccordionDetails>
      <Typography dangerouslySetInnerHTML={{ __html: comment.content }} />
      <Comment comment={comment} />
    </AccordionDetails>
  );
};
