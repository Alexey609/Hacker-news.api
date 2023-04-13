import axios from "axios";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newsUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getNews = async (newsID: number) => {
    const result = await axios
        .get(`${storyUrl + newsID}.json`)
        .then(({ data }) => data);

    return result;
}

export const getNewsID = async () => {
    const result = await axios.get(newsUrl).then(({ data }) => data);

    return result;
}

