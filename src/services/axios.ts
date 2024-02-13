import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://hotel-booking-ei0v.onrender.com",
    timeout: 5000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    withCredentials: true,
});


export default axiosInstance;
