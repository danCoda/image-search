import axios from 'axios';

// Base configuration for our axios. 
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID AGN8OW5A2DnoZBtOYUWPKeYTG7KmCw1dIr-b4f4iv14'
    }
});