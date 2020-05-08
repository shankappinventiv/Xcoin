import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'

const styles = makeStyles(theme =>
    createStyles({
        line:{
            width: 60,
            height: 1,
            opacity: 0.2,
            backgroundColor: '#637696',
        },
    }))

function Line() {
    const classes = styles();
    return (
        <div className={classes.line}>
            
        </div>
    )
}

export default Line
