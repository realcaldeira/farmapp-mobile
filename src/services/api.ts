import axios from 'axios';

const api = axios.create({
  baseURL: 'https://farmappapi.herokuapp.com/api'
});

export {api};