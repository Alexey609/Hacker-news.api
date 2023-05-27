import React from 'react';
import Moment from 'react-moment';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { FeedItem } from '../../Api/hnApi';
import styles from './News.module.css';

export const News = ({ item }: { item: FeedItem }) => {
  return (
    <div className={styles.item}>
      <Link to={`/news/${item.id}`}  className={styles.item__link}>
      <Paper elevation={4} className={styles.paper}>
          <h4>
            {item.title}
          </h4>
        <div>
          <div>Автор - {item.user}</div>
          <div>Рейтинг: {item.points}</div>
          <div>
            Опубликовано:
            <Moment
              unix
              format="MMM, DD YYYY • hh:mm a"
              className={styles.time}
            >
              {item.time}
            </Moment>
          </div>
        </div>
      </Paper>
      </Link>
    </div>
  );
};
