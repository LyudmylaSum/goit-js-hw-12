import axios from "axios";
 

const KEY = '52822111-b1008b71650d3ce195bc41da7';
const URL = 'https://pixabay.com/api/';
export const PER_PAGE = 15;

export async function getImagesByQuery(query, pageNumber) {
  const response = await axios.get(`${URL}`, {
    params: {
      key: KEY,
      q: query,
      per_page: PER_PAGE,
      page: pageNumber,
      type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}