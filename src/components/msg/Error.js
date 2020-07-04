import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Colors from '../../constants/Colors'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({ 
    error:{
        color:Colors.colorError
    }
}));

const Error = ({ error }) => {
    const classes = useStyles()
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Typography  className={classes.error} variant="body2" compoent="p">
                {error}
            </Typography> 
        </Box>
    )
}

export default Error;