import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (q) => {
    const response = await axios.get('?q=q&page=1&key=39173456-4ceb04e5793e75a9af707096f&image_type=photo&orientation=horizontal&per_page=12');
    return response.data.hits;
    
}
