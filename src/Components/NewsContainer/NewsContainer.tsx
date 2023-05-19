import React from 'react';
import Button from '@mui/material/Button';
import { useNewsFeed } from '../../Api/hnApi';
import { News } from '../index';
import styles from './NewsContainer.module.css';

export const NewsContainer = () => {
  const { feed, handleReset } = useNewsFeed();

  return (
    <div className={styles.container}>
      <Button variant="outlined" onClick={handleReset}>
        Перезагрузка
      </Button>
      <ol>
        {feed?.map((item) => (
          <li key={item.id}>
            <News item={item} />
          </li>
        ))}
      </ol>
    </div>
  );
};
