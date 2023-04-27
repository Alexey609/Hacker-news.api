import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

interface commentId {
  comment: any;
}

export const Comments = ({ comment }: commentId) => {
  return (
    <AccordionDetails>
      {comment.comments?.map(
        (
          comment: {
            content:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          },
          id: number
        ) => (
          <Typography key={id}>{comment.content}</Typography>
        )
      )}
    </AccordionDetails>
  );
};
