import axios from "axios";

export const baseUrl = 'https://api.hnpwa.com/v0/news/1.json';
//export const newsUrl = `${baseUrl}newstories.json`;
//export const storyUrl = `${baseUrl}item/`;

// export const getNews = async (newsID: number) => {
//     const result = await axios
//         .get(`${storyUrl + newsID}.json`)
//         .then(({ data }) => data);
//
//     return result;
// }

export const getNews = async () => {
    // const result = await axios.get(newsUrl).then(({ data }) => data);
    const result = await axios.get(baseUrl).then(({ data }) => data);

    return result;
}

