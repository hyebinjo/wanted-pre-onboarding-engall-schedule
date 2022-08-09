import axios from 'axios';
import { HttpRequest } from './httpRequest';

const BASE_URL = 'http://localhost:8000/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const hotelsService = new HttpRequest(axiosInstance);
