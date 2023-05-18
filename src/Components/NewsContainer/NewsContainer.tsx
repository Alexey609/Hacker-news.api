import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { AppDispatch } from '../../redux';
import { fetchStore } from '../../redux/slices/newsSlice';
import { News } from '../index';
import styles from './NewsContainer.module.css';

export const NewsContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  // @ts-ignore
  const state = useSelector((state) => state.news.data);
  //кэширование списка новостей/
  // const { data, refetch } = useQuery({
  //   queryKey: ['news'],
  //   queryFn: getNews,
  //   staleTime: 60000,
  // });

  useEffect(() => {
    dispatch(fetchStore());
    setInterval(() => dispatch(fetchStore()), 60000);
  }, [dispatch]);

  const handleReset = () => {
    dispatch(fetchStore());
  };

  return (
    <div className={styles.container}>
      <Button variant="outlined" onClick={handleReset}>
        Перезагрузка
      </Button>
      <ol>
        {state?.map((item: any, id: number) => (
          <li key={id}>
            <News news={item} />
          </li>
        ))}
      </ol>
    </div>
  );
};
