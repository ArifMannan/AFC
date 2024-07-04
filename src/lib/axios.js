
import axios from 'axios';
const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
apiClient.interceptors.request.use(
    config => {
        // Do something before request is sent
        // You can add authorization tokens here
        return config;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
apiClient.interceptors.response.use(
    response => response,
    error => {
        // Do something with response error
        return Promise.reject(error);
    }
);

export default apiClient;
