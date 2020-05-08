import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'

const styles = makeStyles(theme =>
    createStyles({
        container:{
            // width: 110px,
            padding: '20px 45px',
            // opacity: 0.1,
            borderRadius: 23,
            border: 'solid 2px #009cde',
            '& span':{
                fontFamily: 'AkkuratPro',
                fontSize: 23,
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: '1.67',
                letterSpacing: 1,
                color: '#009cde',
            }
        },
    }))

function HeaderButton(props) {
    const classes = styles();
    return (
        <div className = {classes.container}>
            <span>{props.headerButton}</span>
        </div>
    )
}

export default HeaderButton
