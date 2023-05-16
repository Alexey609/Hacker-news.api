import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import Button from '@mui/material/Button';
import { getNews } from '../../Api/hnApi';
import { AppDispatch } from '../../redux';
import { fetchStore } from '../../redux/slices/newsSlice';
import { News } from '../index';
import styles from './NewsContainer.module.css';

export const NewsContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state) => state);
  //кэширование списка новостей/
  const { data, refetch } = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
    staleTime: 60000,
  });

  const handleReset = () => {
    refetch();
  };

  useEffect(() => {
    dispatch(fetchStore);
  });

  console.log(state);

  return (
    <div className={styles.container}>
      <Button variant="outlined" onClick={() => dispatch(fetchStore())}>
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
