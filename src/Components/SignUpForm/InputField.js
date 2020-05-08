import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'

const styles = makeStyles(theme =>
    createStyles({
        container:{
            '& input':{
                opacity: '0.05',
                borderRadius: 10,
                width: '98%',
                padding: '15px 20px',
                backgroundColor: '#009cde',
            }
        },
        fieldName:{
            opacity: 0.5,
            fontFamily: 'AkkuratPro',
            fontSize: 16,
            lineHeight: 1.63,
            color: '#637696',
        },
    }))

function InputField(props) {
    const classes = styles()
    return (
        <div className={classes.container}>
            <label className={classes.fieldName}>
                {props.name}
            </label>            
                <input
                type = {props.type}
                name = {props.name}
                id = {props.id}
                value = {props.value}
                onChange={props.onChange}
                />
                <div className={classes.error}>{props.error}</div>
        </div>
    )
}

export default InputField
