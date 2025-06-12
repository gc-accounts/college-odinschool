import axios from 'axios';

export const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || '';

const axiosApi = axios.create({
    baseURL: backendUrl + '/graphql',
    headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN || ''}`
    }
});

export default axiosApi;








