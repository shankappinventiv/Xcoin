import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'

const styles = makeStyles(theme =>
    createStyles({
        btn:{
            padding: '25px 217px',
            borderRadius: 32,
            boxShadow: '0 2px 4px 0 rgba(103, 194, 6, 0.3)',
            backgroundColor: '#86c306',
            color: '#ffffff',
            outline: 'none',
            border: '1px solid #86c306',
            fontFamily: 'AkkuratPro',
            fontSize: 16,
        },
    }))

function ContinueButton() {
    const classes = styles();
    return (
        <div className={classes.container}>
            <button className={classes.btn}>CONTINUE</button>
        </div>
    )
}

export default ContinueButton
