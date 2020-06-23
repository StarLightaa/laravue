import store from '../store';
import axios from 'axios';

export function http() {
    return axios.create({
        baseURL: store.state.apiURL,
        headers: {
            Authorization: 'Bearer ',
        }
    });
}

export function httpFile() {
    return axios.create({
        baseURL: store.state.apiURL,
        headers: {
            Authorization: 'Bearer ',
            'Content-Type' : 'multipart/form-data'
        }
    });
}