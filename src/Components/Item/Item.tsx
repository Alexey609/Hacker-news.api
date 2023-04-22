import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Moment from 'react-moment';
import {getItem} from "../../Api/hnApi";
import {Comments} from './../Comments/Comments';
import styles from './Item.module.css';

interface Object {
    url: string
    title: string
    time: number
    user: string
    content: string
    comments_count: number
    comments: Array<Object>
}

export const Item = () => {
    const {id}: {id?: number} = useParams();

    const [item, setItem] = useState({} as Object);

    useEffect(() => {
        if (id) {
            getItem(id).then(data => setItem(data));
        }
    }, [id]);

    console.log(item.comments);

    return (
        <div className={styles.detailNews__item}>
            <div className={styles.detailNews__top}>
                <h4 className={styles.detailNews__title}>{item?.title}</h4>
                <div>{item?.url && <Link to={item.url} className={styles.detailNews__link}>{item.url} ссылка на первоисточник</Link>}</div>
            </div>
           <div className={styles.detailNews__body}>
               <div>Дата публикации:
                   <Moment unix format='MMM, DD YYYY • hh:mm a' style={{ marginLeft: 4 }}>
                       {item.time}
                   </Moment>
               </div>
               <div>Автор - {item.user}</div>
               <div>Количество комментариев: {item.comments_count}</div>
           </div>

            <div className={styles.comments}>
                <h4>Комментарии:</h4>
                {item.comments
                    ?.map((comment, id: number) =>
                        <Comments key={id} comment={comment}/>
                )
                }
            </div>
        </div>
    );
};