import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Colors from '../../constants/Colors'

const useStyles = makeStyles(() => ({ 
    loader:{
        color:Colors.colorTextPrimary
    }
}));

const Loader = () => {
    const classes = useStyles()
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress className={classes.loader}/>
        </Box>
    )
}

export default Loader;