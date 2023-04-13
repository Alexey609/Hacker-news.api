import React, {useState, useEffect } from "react";
import { getNewsID } from '../../Api/hnApi';
import { News } from "../index";
import styles from './NewsContainer.module.css';

export const NewsContainer = () => {
    const [newsIds, setNewsIds] = useState<any>([]);

    useEffect(() => {
        getNewsID().then(data => setNewsIds(data));
    }, [])

    return (
        <div className={styles.container}>
            <ol>
            {newsIds
                .slice(400, 500)
                .map((newsID: number, i: React.Key | null | undefined) => <li><News key={i} newsID={newsID} /> </li>)
            }
            </ol>
        </div>
    );
};