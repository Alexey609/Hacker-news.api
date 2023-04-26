import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'salmon' }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            <Link to="/" className={styles.header__link}>
              HackerNews
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
