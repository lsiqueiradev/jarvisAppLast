import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.0.232:8000/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 5000,
})
