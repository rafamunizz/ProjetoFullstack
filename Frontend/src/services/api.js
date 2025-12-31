import axios from "axios";

const api = axios.create({
    baseURL: 'https://projeto-fullstack-backend2.vercel.app'
})



export default api