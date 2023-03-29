import axios from 'axios'
import config from '../config.json'

export const api = axios.create({
    baseURL: config.api,
    timeout: 1000 * config.timeout,
})