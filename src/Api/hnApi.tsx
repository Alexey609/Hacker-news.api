import Axios from 'axios';
import React, { useCallback, useState, useEffect, useContext } from 'react';

const axios = Axios.create({ baseURL: `https://api.hnpwa.com/v0` });

export interface FeedItem {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

export interface Item {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: Item[]; // Comments are items too
  level: number;
  comments_count: number;
}

interface State {
  feed: Array<FeedItem>;
  news: { [id: number]: Item };
}

interface Context {
  state: State;
  fetchFeed?: Function;
  fetchItem?: Function;
}

export const NewsContext = React.createContext<Context>({
  state: { feed: [], news: {} },
});

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<State>({ feed: [], news: {} });

  const fetchFeed = useCallback(async () => {
    const result = await Promise.all(
      [1, 2, 3, 4].map((i) =>
        axios.get(`/newest/${i}.json`).then(({ data }) => data)
      )
    );

    setState({
      ...state,
      feed: result.reduce((a, b) => [...a, ...b], []).slice(0, 100),
    });
  }, [state]);

  const fetchItem = useCallback(
    async (id: number) => {
      const result = await axios
        .get(`/item/${id}.json`)
        .then(({ data }) => data);

      setState({
        ...state,
        news: { ...state.news, [id]: result },
      });
    },
    [state]
  );

  return (
    <NewsContext.Provider value={{ state, fetchFeed, fetchItem }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsFeed = () => {
  const { state, fetchFeed } = useContext(NewsContext);

  useEffect(() => {
    state.feed.length === 0 && fetchFeed?.();
  }, [state, fetchFeed]);

  useEffect(() => {
    const interval = setInterval(() => fetchFeed, 60000);
    return () => clearInterval(interval);
  }, [fetchFeed]);

  const handleReset = () => {
    fetchFeed && fetchFeed();
  };

  return {
    feed: state?.feed,
    handleReset,
  };
};
