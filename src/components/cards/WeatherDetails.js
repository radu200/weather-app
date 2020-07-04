import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Colors from '../../constants/Colors'
import { getDay, getHour } from '../../utils/FormatDate';
import Loader from '../progress/Loader';
import Error from '../msg/Error';

const useStyles = makeStyles(() => ({ 
    root: {
        color: Colors.colorTextPrimary,
        backgroundColor: Colors.bgColorCards,
        margin: 5
    },
    wrapperContent: {
        alignItems: "center",
        padding: 10
    },
    image: {
        width: 50,
        height: 50

    },
    hour:{
        fontSize:14
    }
}));

const WeatherDetails = ({ foreCastWeatherData, foreCastLoader, error }) => {
    const classes = useStyles()
    const data = foreCastWeatherData.list;

  return ( 
    <> 
     {foreCastLoader && <Loader />}
     {error && <Error error={error} />}
     
     {data && data.map(w => w.weather.map(d => 
        <Paper key={d.id} className={classes.root}>
            <Grid className={classes.wrapperContent} container>
                <Grid item xs={3} md={2}>
                    <Typography variant="h5" component="h2">
                         {getDay(w.dt_txt)} 
                          <br />
                         <span className={classes.hour} >{getHour(w.dt_txt)}</span>
                    </Typography>
                </Grid>
                <Grid item xs={7} md={9}>
                    <Typography variant="h5" component="h2">
                        {w.main.temp}°
                    </Typography>
                </Grid>
                <Grid item xs={2} md={1}>
                    <img
                        className={classes.image}
                        alt={d.main}
                        src={`http://openweathermap.org/img/wn/${d.icon}.png`}/>
                    <Typography variant="body2" component="p">
                        {d.description}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>))}
    </>
  )
}



export default WeatherDetails;