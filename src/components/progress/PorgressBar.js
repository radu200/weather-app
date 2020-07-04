import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Colors from '../../constants/Colors'

const BorderLinearProgress = withStyles(() => ({
    root: {
        height: 10,
        borderRadius: 5,
        margin: 7
    },
    colorPrimary: {
        backgroundColor:Colors.bgColorProgressBar
    },
    bar: {
        borderRadius: 5,
        backgroundColor: Colors.colorProgressBar
    },
   
}))(LinearProgress);

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    timeLeft:{
        color:Colors.colorTextPrimary,
        marginLeft:8
    }
});

const ProgressBar = ({ progress, timeLeft }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
              <Typography  className={classes.timeLeft}  variant="body2" component="p">
                  Reloading in {timeLeft} s
               </Typography>
            <BorderLinearProgress variant="determinate" value={progress}/>
        </div>
    );
}



export default ProgressBar;