import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { CommentItem } from '../../Api/hnApi';
import styles from './Comment.module.css';


export const Comment = ({ comment, depth, style }: { comment: CommentItem, depth: number, style: object}) => {
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
        {comment.comments.filter(comment => !comment.deleted).map((c: CommentItem, id: number) => (
          <Comment
              depth={depth + 1}
              style={{paddingLeft: `${depth}rem`,}}
              comment={c}
              key={id}
          />
        ))}
      </Accordion>
    </div>
  );
};
