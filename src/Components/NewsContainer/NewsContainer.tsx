import React, { useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import { NewsContext } from '../../Api/hnApi';
import { News } from '../index';
import styles from './NewsContainer.module.css';

export const NewsContainer = () => {
  const { state, fetchFeed } = useContext(NewsContext);

  useEffect(() => {
    state.feed.length === 0 && fetchFeed?.();
  }, [state, fetchFeed]);

  useEffect(() => {
    const interval = setInterval(() => fetchFeed, 60000);
    return () => clearInterval(interval);
  }, [fetchFeed]);

  const handleReset = () => {
    fetchFeed && fetchFeed();
  };

  return (
    <div className={styles.container}>
      <Button variant="outlined" onClick={handleReset}>
        Перезагрузка
      </Button>
      <ol>
        {state?.feed?.map((item) => (
          <li key={item.id}>
            <News item={item} />
          </li>
        ))}
      </ol>
    </div>
  );
};
