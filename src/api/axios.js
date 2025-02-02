import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:8080/api', // URL API backend
  baseURL: 'https://webspring.onrender.com/api', // URL API backend
});