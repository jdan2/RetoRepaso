import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'https://glacial-everglades-61490.herokuapp.com/api/'
});

export default clientAxios;