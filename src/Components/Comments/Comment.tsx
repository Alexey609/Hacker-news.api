import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { Comments } from './Comments';
import { CommentItem } from '../../Api/hnApi';
import styles from './Comment.module.css';


export const Comment = ({ comment }: { comment: CommentItem }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
              className={styles.comment__item}
              dangerouslySetInnerHTML={{ __html: comment.content }}>
          </Typography>
        </AccordionSummary>
        {comment.comments.filter(comment => !comment.deleted).map((c: any, id: number) => (
          <Comments comment={c} key={id} />
        ))}
      </Accordion>
    </div>
  );
};
