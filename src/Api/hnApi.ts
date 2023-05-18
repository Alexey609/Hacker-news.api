import axios from 'axios';

export const page1Url = 'https://api.hnpwa.com/v0/newest/1.json';
export const page2Url = 'https://api.hnpwa.com/v0/newest/2.json';
export const page3Url = 'https://api.hnpwa.com/v0/newest/3.json';
export const page4Url = 'https://api.hnpwa.com/v0/newest/4.json';

export const getNews = async () => {
  const page1 = await axios.get(page1Url).then(({ data }) => data);
  const page2 = await axios.get(page2Url).then(({ data }) => data);
  const page3 = await axios.get(page3Url).then(({ data }) => data);
  const page4 = await axios.get(page4Url).then(({ data }) => data);
  const result = page1.concat(page2, page3, page4).slice(0, 100);

  return result;
};

export const getItem = async (id: number | undefined) => {
  const result = await axios
    .get(`https://api.hnpwa.com/v0/item/${id}.json`)
    .then(({ data }) => data);

  return result;
};
