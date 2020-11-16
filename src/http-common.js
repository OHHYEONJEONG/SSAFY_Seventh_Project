import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:9999/vue/api/board',
  headers: {
    'Content-type': 'application/json',
  },
});
