import React from 'react';
import Moment from 'react-moment';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { FeedItem } from '../../Api/hnApi';
import styles from './News.module.css';

export const News = ({ item }: { item: FeedItem }) => {
  return (
    <div className={styles.item}>
      <Paper elevation={4}>
        <div className={styles.item__top}>
          <Link to={`/news/${item.id}`} className={styles.item__link}>
            {item.title}
          </Link>
        </div>
        <div className={styles.item__body}>
          <div>Автор - {item.user}</div>
          <div>Рейтинг: {item.points}</div>
          <div>
            Опубликовано:
            <Moment
              unix
              format="MMM, DD YYYY • hh:mm a"
              style={{ marginLeft: 4 }}
            >
              {item.time}
            </Moment>
          </div>
        </div>
      </Paper>
    </div>
  );
};
