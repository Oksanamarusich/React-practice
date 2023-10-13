import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const url = 'https://pixabay.com/api/';
const API_KEY = '39173456-4ceb04e5793e75a9af707096f';

export const fetchImages = async (searchText, page) => {
    const response = await axios.get(`${url}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data.hits;
    
}
