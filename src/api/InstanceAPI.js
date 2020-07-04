import axios from "axios";

export const instanceAPI = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5"
})
 