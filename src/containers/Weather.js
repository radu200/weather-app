import React, { useEffect, useState } from 'react';
import WeatherPage from '../pages/Weather';
import { getCurrentWeather, getForeCastWeather} from '../api/Weather';

const Weather = () => {
    const [timeLeft, setTimeLeft] = useState(null);
    const [progress, setProgress] = useState(null);
    const [currentWeatherData, setCurrentWeatherData] = useState([]);
    const [foreCastWeatherData, setForeCatsWeatherData] = useState([]);
    const [foreCastLoader, setForCastLoader] = useState(true);
    const [error, setError] = useState("")

    const getWeather = async () => {
      
      try {
         const currentWeather = await getCurrentWeather();
         setCurrentWeatherData(currentWeather.data)
        
         setForCastLoader(true)
        
         const foreCastWeather = await getForeCastWeather();

         if(foreCastWeather.status === 200){
           setForCastLoader(false)
           setForeCatsWeatherData(foreCastWeather.data)
         }

       } catch(err){
         if(err){
          setForCastLoader(false)
          setError("An error occurred")
         }
       }
    }

    useEffect(() => {
      // reset 
      if (!timeLeft) {
        getWeather();
        setTimeLeft(60);
        setProgress(0);
      }
      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
        const increaseTime = 100 / 60;
        setProgress(prev => prev + increaseTime);
      }, 1000);

      // clear interval on re-render to avoid memory leaks
      return () => {        
        clearInterval(intervalId);
      }
    }, [timeLeft]);  


  
    return <WeatherPage 
             progress={progress}
             timeLeft={timeLeft}
             currentWeatherData={currentWeatherData}
             foreCastLoader={foreCastLoader}
             foreCastWeatherData={foreCastWeatherData}
             error={error}
           /> 
}
export default Weather;