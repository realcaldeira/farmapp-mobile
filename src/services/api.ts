import axios from 'axios';

const api = axios.create({
  baseURL: 'https://farmappapi.herokuapp.com/api'
});

const apiCep = axios.create({
  baseURL: 'viacep.com.br/ws/'
});

export {api, apiCep};