import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Button from '@mui/material/Button';
import { getNews } from '../../Api/hnApi';
import { News } from '../index';
import styles from './NewsContainer.module.css';

export const NewsContainer = () => {
  const { data, refetch } = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
    staleTime: 60000,
  });

  const handleReset = () => {
    refetch();
  };

  return (
    <div className={styles.container}>
      <Button variant="outlined" onClick={handleReset}>
        Перезагрузка
      </Button>
      <ol>
        {data?.map((item: any, id: number) => (
          <li key={id}>
            <News news={item} />
          </li>
        ))}
      </ol>
    </div>
  );
};
