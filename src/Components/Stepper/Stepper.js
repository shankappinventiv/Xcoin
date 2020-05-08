import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'
import SingleStep from './SingleStep'

const styles = makeStyles(theme =>
    createStyles({
        container:{
            display: 'flex',
        },
    }))

function Stepper() {
    const classes = styles();
    return (
        <div className = {classes.container}>
         <div className = {classes.firstStep}>
         <SingleStep number = '1' stepName = 'Account setup' />
         </div>
         <div className = {classes.secondStep}>
         <SingleStep number = '2' stepName = 'Account setup' />
         </div>
         <div className = {classes.thirdStep}>
         <SingleStep number = '3' stepName = 'Account setup' />
         </div>   
        </div>
    )
}

export default Stepper
