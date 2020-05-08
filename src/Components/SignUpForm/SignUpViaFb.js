import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'

const styles = makeStyles(theme =>
    createStyles({
        btn:{
            padding: '25px 170px',
            borderRadius: 32,
            boxShadow: '0 2px 4px 0 rgba(60, 90, 154, 0.3)',
            backgroundColor: '#3c5a9a',
            color: '#ffffff',
            outline: 'none',
            border: '1px solid #3c5a9a',
            fontFamily: 'AkkuratPro',
            fontSize: 16,
        },
    }))

function SignUpViaFb() {
    const classes = styles();
    return (
        <div className={classes.container}>
            <button className={classes.btn}>SIGN UP VIA FACEBOOK</button>
        </div>
    )
}

export default SignUpViaFb;

