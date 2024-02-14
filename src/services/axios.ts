import axios from "axios";


const axiosInstance = axios.create({
    // baseURL: "https://hotel-booking-ei0v.onrender.com",
    baseURL: "http://localhost:30001",
    timeout: 5000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    withCredentials: true,
});


export default axiosInstance;
