import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'

const styles = makeStyles(theme =>
    createStyles({

    }))

export default function Logo() {
    const classes = styles()
    return (
        <div className = {classes.container}>
            <div>
            <h1>Logo</h1>
                {/* <span>></span>
                <span>></span>
                <span>></span>
                <span>></span> */}
            </div>
            {/* <div>
                <span>C</span>
                <span>O</span>
                <span>x</span>
                <span>x</span>
                <span>x</span>
                <span>x</span>
            </div> */}
        </div>
    )
}
