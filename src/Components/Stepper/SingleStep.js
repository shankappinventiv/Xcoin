import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'
import Line from './Line';

const styles = makeStyles(theme =>
    createStyles({
        container:{
            display: 'flex',
            alignItems: 'center',
        },
        numAndDescription:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },
        number:{
            width: 64,
            height: 64,
            boxShadow: '0 2px 4px 0 rgba(0, 156, 222, 0.3)',
            backgroundColor: '#009cde',
            fontFamily: 'CircularStd',
            fontSize: 24,
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '50%',
            fontWeight: 500,
            lineHeight: 1.17,
            textAlign: 'center',
            alignItems: 'center',
            color: '#ffffff',
        },
        StepName:{
            fontFamily: 'CircularStd',
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.63,
            textAlign: 'center',
            color: '#000000',
        },
        
    }))

function SingleStep(props) {
    const classes = styles();
    return (
        <div className = {classes.container}>
            <div className = {classes.numAndDescription}>
                 <div className = {classes.number}>
                    {props.number}
                </div>
                <div className = {classes.StepName}>
                    {props.stepName}
                </div>
            </div>
            <Line />
            
        </div>
    )
}

export default SingleStep
