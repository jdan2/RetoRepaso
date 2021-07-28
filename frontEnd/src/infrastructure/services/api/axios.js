import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'https://app-parqueadero-nodejs.herokuapp.com/'
});

export default clientAxios;