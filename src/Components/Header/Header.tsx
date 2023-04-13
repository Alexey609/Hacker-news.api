import React from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export const Header = () => {

    return (
     <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static" style={{ backgroundColor: "salmon" }}>
             <Toolbar>
                 <Typography variant="h6" component="div">
                     HackerNews
                 </Typography>
             </Toolbar>
         </AppBar>
     </Box>
    );
}