import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { Comments } from './Comments';

interface CommentID {
  comment: any;
}

export const Comment = ({ comment }: CommentID) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{ wordWrap: 'break-word', width: 800 }}
            dangerouslySetInnerHTML={{ __html: comment.content }}
          />
        </AccordionSummary>
        {comment.comments.map((c: any, id: number) => (
          <Comments comment={c} key={id} />
        ))}
      </Accordion>
    </div>
  );
};
