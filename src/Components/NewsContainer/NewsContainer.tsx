import React, {useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { getNews } from '../../Api/hnApi';
import { News } from "../index";
import styles from './NewsContainer.module.css';

export const NewsContainer = () => {
    const [newsIds, setNewsIds] = useState<any>([]);

    useEffect(() => {
        getNews().then(data => setNewsIds(data));
        setInterval(() => {
            getNews().then(data => setNewsIds(data));
        },60000);
    }, []);

    const handleReset = () => {
        getNews().then(data => setNewsIds(data));
    };

    return (
        <div className={styles.container}>
            <Button variant="outlined" onClick={handleReset}>Перезагрузка</Button>
            <ol>
            {newsIds
                .map((news: object[], id: React.Key | null | undefined) => <li key={id}><News news={news} /> </li>)
            }
            </ol>
        </div>
    );
};