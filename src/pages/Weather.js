import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from '../components/cards/Header'
import WeatherDetailsCard from '../components/cards/WeatherDetails'
import ProgressBar from '../components/progress/PorgressBar';
import Colors from '../constants/Colors'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:"100%",
        height: "99vh",
        overflow: "auto",
        backgroundColor: Colors.colorPrimary,
        margin: "0 auto",
        padding: 5,
    
    },
    paper: {
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    loader:{
        margin:"0 auto",
        color:Colors.colorTextPrimary
    }
}));

const Weather = ({ progress, timeLeft, currentWeatherData, foreCastWeatherData, foreCastLoader, error }) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Header  currentWeatherData={currentWeatherData} />
                    <ProgressBar progress={progress} timeLeft={timeLeft}/>
                    <WeatherDetailsCard foreCastWeatherData={foreCastWeatherData} foreCastLoader={foreCastLoader} error={error} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Weather;