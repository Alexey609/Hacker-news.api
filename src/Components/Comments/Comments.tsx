import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Comment {
    comment: any
}

export const Comments = ({ comment }:Comment) => {

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ wordWrap: "break-word", width: 800 }}>
                        {comment.content}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {comment.comments
                        ?.map((comment: { content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, id: number) =>
                            <Typography key={id}>
                                {comment.content}
                            </Typography>
                        )
                    }
                </AccordionDetails>
            </Accordion>
        </div>
    );
};