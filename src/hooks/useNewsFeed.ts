import {useContext, useEffect} from "react";
import {NewsContext} from "../Api/hnApi";

export const useNewsFeed = () => {
    const { state, fetchFeed } = useContext(NewsContext);

    useEffect(() => {
        !state.article.length && fetchFeed?.();
    }, [state, fetchFeed]);

    useEffect(() => {
        const interval = setInterval(() => fetchFeed, 60000);
        return () => clearInterval(interval);
    }, [fetchFeed]);

    const handleReset = () => {
        fetchFeed && fetchFeed();
    };

    return {
        feed: state?.article,
        handleReset,
    };
};