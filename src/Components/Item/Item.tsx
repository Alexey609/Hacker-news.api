import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getItem} from "../../Api/hnApi";

interface ID {
  news: any
}

export const Item = () => {
    const {id}: {id?: number} = useParams();

    const [item, setItem] = useState<any>([]);

    useEffect(() => {
        if (id) {
            getItem(id).then(data => setItem(data));
        }
    }, [])

    return (
        <div>
            <div>{item?.title}</div>
            <div>{item?.url && <a href={item.url}>{item.url}</a>}</div>
        </div>
    );
};