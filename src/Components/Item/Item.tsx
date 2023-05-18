import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';
import Moment from 'react-moment';
import { Comment } from '../Comments/Comment';
import { fetchId } from '../../redux/slices/idSlice';
import { AppDispatch } from '../../redux';
import styles from './Item.module.css';

export const Item = () => {
  const { id }: { id?: number } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  // @ts-ignore
  const state = useSelector((state) => state.id.data);

  useEffect(() => {
    dispatch(fetchId(id));
    setInterval(() => dispatch(fetchId(id)), 60000);
  }, [dispatch, id]);

  const handleReset = () => {
    dispatch(fetchId(id));
  };

  return (
    <div className={styles.detailNews__item}>
      <div className={styles.detailNews__top}>
        <h4 className={styles.detailNews__title}>{state?.title}</h4>
        <div>
          {state?.url && (
            <Link to={state.url} className={styles.detailNews__link}>
              {state.url} ссылка на первоисточник
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
            {state?.time}
          </Moment>
        </div>
        <div>Автор - {state?.user}</div>
        <div>Количество комментариев: {state?.comments_count}</div>
      </div>

      <div className={styles.container__link}>
        <Link to="/">
          <ArrowBackIcon></ArrowBackIcon>
        </Link>
        <div>Вернуться назад</div>
      </div>

      <div className={styles.comments}>
        <h4>Комментарии:</h4>
        {state?.comments.map((comment: any, id: number) => (
          <Comment key={id} comment={comment} />
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
