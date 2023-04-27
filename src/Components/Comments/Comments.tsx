import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Comment } from './Comment';

interface commentId {
  comment: any;
}

export const Comments = ({ comment }: commentId) => {
  return (
    <AccordionDetails>
      <Typography dangerouslySetInnerHTML={{ __html: comment.content }} />
      <Comment comment={comment} />
    </AccordionDetails>
  );
};
