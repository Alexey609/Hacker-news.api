import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';
import Moment from 'react-moment';
import { getItem } from '../../Api/hnApi';
import { Comments } from '../Comments/Comments';
import styles from './Item.module.css';

export const Item = () => {
  const { id }: { id?: number } = useParams();

  const { data, refetch } = useQuery({
    queryKey: ['itemId', id],
    queryFn: () => getItem(id),
    staleTime: 60000,
  });

  const handleReset = () => {
    refetch();
  };

  return (
    <div className={styles.detailNews__item}>
      <div className={styles.detailNews__top}>
        <h4 className={styles.detailNews__title}>{data?.title}</h4>
        <div>
          {data?.url && (
            <Link to={data.url} className={styles.detailNews__link}>
              {data.url} ссылка на первоисточник
            </Link>
          )}
        </div>
      </div>
      <div className={styles.detailNews__body}>
        <div>
          Дата публикации:
          <Moment
            unix
            format="MMM, DD YYYY • hh:mm a"
            style={{ marginLeft: 4 }}
          >
            {data?.time}
          </Moment>
        </div>
        <div>Автор - {data?.user}</div>
        <div>Количество комментариев: {data?.comments_count}</div>
      </div>

      <div className={styles.container__link}>
        <Link to="/">
          <ArrowBackIcon></ArrowBackIcon>
        </Link>
        <div>Вернуться назад</div>
      </div>

      <div className={styles.comments}>
        <h4>Комментарии:</h4>
        {data?.comments.map((comment: any, id: number) => (
          <Comments key={id} comment={comment} />
        ))}
        <Button
          variant="outlined"
          style={{ marginTop: 15 }}
          onClick={handleReset}
        >
          Перезагрузка
        </Button>
      </div>
    </div>
  );
};
