import axios from 'axios';
import { SERVER_URL } from '@utils/constant.jsx'

const requestor = axios.create({
    baseURL: SERVER_URL,
	withCredentials: true,
    timeout: 5000
});

export default requestor;
