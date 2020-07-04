import { instanceAPI } from './InstanceAPI'
 
const API_KEY = 'd4ff336eb78b41ebf8bb0499f3578364';
const CITY = 'LONDON';

export const getCurrentWeather = async () => {
    const url = `/weather?q=${CITY}&appid=${API_KEY}&type=accurate&units=metric`;
    const res = await instanceAPI.get(url)
    return res
}
export const getForeCastWeather = async () => {
    const url = `/forecast?q=${CITY}&appid=${API_KEY}&type=accurate&units=metric`;
    const res = await instanceAPI.get(url)
    return res
}