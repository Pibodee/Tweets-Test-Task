import axios from "axios";

axios.defaults.baseURL = 'https://643287aad0127730d2d4343c.mockapi.io';

export async function fetchTweets() {
    const response = await axios.get('/contacts');
    return response.data;
}