import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';
import Moment from 'react-moment';
import { Comment } from '../Comments/Comment';
import { useFeedId } from '../../hooks/useFeedId';
import styles from './Item.module.css';

export const Item = () => {
  const { id }: { id?: string } = useParams();

  const { data, handleReset } = useFeedId({ id });

  return (
    <div className={styles.detailNews__item}>
      <div>
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
            className={styles.time}
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
          <Comment key={id} comment={comment} />
        ))}
        <Box mt={2}>
            <Button
                variant="outlined"
                onClick={handleReset}
            >
                Перезагрузка
            </Button>
        </Box>
      </div>
    </div>
  );
};
