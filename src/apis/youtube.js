import axios from 'axios';

const KEY = 'AIzaSyAiDFZAM5GFqy1ZmzCNkBIDJ7ZnPDfIk34';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});


