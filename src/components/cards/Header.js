import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Colors from '../../constants/Colors'
import { currentDate } from '../../utils/FormatDate';

const useStyles = makeStyles(() => ({
    paper: {
        color: Colors.colorTextPrimary,
        backgroundColor: Colors.colorPrimary,
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 0
    },
    image: {
        width: 50,
        height: 50

    },
    date: {
        border: `2px solid ${Colors.colorSecondary}`,
        display: "flex",
        alignItems: "center",
        padding: 5,
        fontSize: 10,
        borderRadius: 5
    }

}));

const WeatherDetails = ({currentWeatherData}) => {
    const classes = useStyles()
    const temperature = currentWeatherData.main && currentWeatherData.main.temp;
    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" component="h2">
                LONDON
            </Typography>
            <Typography className={classes.date} variant="body2" component="p">
                {currentDate()}
            </Typography>
            <Typography variant="h5" component="h2">
                {temperature}°
            </Typography>

        </Paper>

    )
}

export default WeatherDetails;