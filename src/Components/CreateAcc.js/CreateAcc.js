import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'

const styles = makeStyles(theme =>
    createStyles({
        container:{
            fontFamily: 'CircularStd',
            fontSize: 48,
            fontWeight: 'bold',
            lineHeight: '1.33',
            color: '#000000',
        }
    }))

function CreateAcc(props) {
    const classes = styles();
    return (
        <div className = {classes.container}>
            {props.creat}
        </div>
    )
}

export default CreateAcc
