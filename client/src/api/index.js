import axios from 'axios'

const url = 'http://localhost:5000/users'

export const fetchPosts = () => axios.get(url);

