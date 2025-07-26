import axios from "axios";


const myRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Ensure this is set in your .env file
    timeout: 10000, // Set a timeout for requests
    headers: {
        'Content-Type': 'application/json', // Set default content type
    },
    // withCredentials: true, // Include credentials for cross-origin requests
    // validateStatus: function (status) {
    //     // Accept only 2xx status codes
    //     return status >= 200 && status < 300;
    // }
});

// Gắn token vào headers nếu có
myRequest.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// (Optional) Xử lý lỗi toàn cục
myRequest.interceptors.response.use(
    res => res,
    error => {
        // Ví dụ: nếu bị 401 thì logout
        if (error.response?.status === 401) {
            // dispatch(logout()), toast("Hết phiên đăng nhập"), ...
            console.warn('Unauthorized - please login again.');
        }
        return Promise.reject(error);
    }
);

export default myRequest;