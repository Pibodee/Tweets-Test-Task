import axios from 'axios';

axios.defaults.baseURL = 'https://643287aad0127730d2d4343c.mockapi.io';
const perPage = 3;

export async function fetchTweets(page) {
  const response = await axios.get('/contacts', {
    params: {
      page,
      limit: perPage,
    },
  });
  return response.data;
}

export async function fetchFollow(user) {
    const response = await axios.put(`/contacts/${user.id}`, user)
    return response.data;
}