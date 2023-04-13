import React, {useState, useEffect } from "react";
import Moment from 'react-moment';
import { Link } from "react-router-dom";
import { getNews } from '../../Api/hnApi';

interface ID {
  newsID: number
}

interface Object {
    url: string
    title: string
    by: string
    time: number
}

export const News = ({ newsID } :ID) => {
    const [news, setNews] = useState({} as Object);

    useEffect(() => {
       getNews(newsID).then(data => data && data.url && setNews(data));

    }, [newsID]);


    return news && news.url ? (
        <div>
            <Link to={news.url}>
                <h6>{news.title}</h6>
            </Link>
            <div>
                <p>Автор: {news.by}</p>
                <p>Опубликовано</p>
                <Moment unix format='MMM, DD YYYY • hh:mm a'>
                    {news.time}
                </Moment>
            </div>
        </div>
    ) : null;
};