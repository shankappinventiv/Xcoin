import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'

const styles = makeStyles(theme =>
    createStyles({
        container:{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& ul':{
                display: 'flex',
                justifyContent: 'space-between',
                listStyle: 'none',
                '& li':{
                    marginLeft: 12,
                    fontFamily: 'AkkuratPro',
                    fontSize: 14,
                    lineHeight: 1.57,
                    color: '#637696',
                }
            }
        },
        language:{
            fontFamily: 'AkkuratPro',
            fontSize: 14,
            lineHeight: 1.57,
            color: '#637696',
        },
        copyRight:{
            opacity: '0.5',
            fontFamily: 'AkkuratPro',
            fontSize: 14,
            lineHeight: '1.57',
            color: '#637696',
        }
    }))

function Footer() {
    const classes = styles()
    return (
        <React.Fragment>
        <div className = {classes.container}>
            <ul>
                <li>© Xcoins.com</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Legal notice</li>
                <li>Sitemap</li>
            </ul>
            <div className = {classes.language}>
                Language:
            </div>
        </div>
        <div className = {classes.copyRight}>
            Xcoins is property of CF Technologies Ltd - Company #204616970 4 East, Level 8, Sliema Road, GZR1639, Malta. All trademarks and copyrights belong to their respective 
            owners. All rights reserved.
        </div>
        </React.Fragment>
    )
}

export default Footer
