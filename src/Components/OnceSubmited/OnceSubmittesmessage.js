import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'
// import classes from '*.module.sass'

const styles = makeStyles(theme =>
    createStyles({
        container:{
            // opacity: 0.1,
            borderRadius: 7,
            backgroundColor: '#f7f3e8',
            '& div':{
            fontFamily: 'AkkuratPro',
            fontSize: 24,
            // opacity: 1.1,
            fontWeight: 'bold',
            lineHeight: 1.57,
            letterSpacing: 'normal',
            color: '#e6b413',
            }
        }
    }))

function OnceSubmittesmessage() {
    const classes = styles()
    return (
        <div className = {classes.container}>
        <div>
            Once submitted, your profile cannot be changed. Please ensure <br/>
            that your information is correct.
        </div>
        </div>
    )
}

export default OnceSubmittesmessage
