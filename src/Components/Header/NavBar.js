import React from 'react'
import {makeStyles, createStyles} from '@material-ui/core'

const styles = makeStyles(theme =>
    createStyles({
        container:{
            display: 'flex',
            listStyle: 'none',
            '& li':{
                fontFamily: 'AkkuratPro',
                fontSize: 12,
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: '1.67',
                letterSpacing: 1,
                color: '#3a4e6f',
            }
        },
    }))

export default function NavBar() {
    const classes = styles()
    return (
        <ul className = {classes.container}>
          <li>BUY BITCOIN</li>  
          <li>SELL BITCOIN</li>
          <li>BLOG</li>
          <li>ABOUT US</li>
        </ul>
    )
}
