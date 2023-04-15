import React from "react";
import Moment from 'react-moment';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import styles from './News.module.css';

interface ID {
  news: any
}

export const News = ({ news } :ID) => {

    return (
        <div className={styles.item}>
            <Paper elevation={4}>
                <div className={styles.item__top}>
                    <Link to={news.url} className={styles.item__link}>
                        {news.title}
                    </Link>
                </div>
                <div className={styles.item__body}>
                    <div>Автор {news.user}</div>
                    <div>
                        Опубликовано:
                      <Moment unix format='MMM, DD YYYY • hh:mm a' className={styles.item__time}>
                        {news.time}
                      </Moment>
                    </div>
                </div>
            </Paper>
        </div>
    );
};