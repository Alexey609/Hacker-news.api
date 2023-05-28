import {useContext, useEffect} from "react";
import {NewsContext} from "../Api/hnApi";

export const useFeedId = ({ id }: { id: string }) => {
    const { state, fetchItem } = useContext(NewsContext);

    useEffect(() => {
        id && !state.news[parseInt(id)] && fetchItem?.(id);
    }, [id, state, fetchItem]);

    useEffect(() => {
        const interval = setInterval(() => fetchItem?.(id && parseInt(id)), 60000);
        return () => clearInterval(interval);
    }, [id, fetchItem]);

    const handleReset = () => {
        fetchItem(parseInt(id));
    };

    const data = id ? state.news[parseInt(id)] : undefined;

    return {
        data,
        handleReset,
    };
};