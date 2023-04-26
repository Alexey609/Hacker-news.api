import React from 'react';
import Box from '@mui/material/Box';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <footer className={styles.footer}></footer>
    </Box>
  );
};
