import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';


const styles = makeStyles(theme =>
    createStyles({
        container:{
            display: 'flex',
        },
        tAndCpolicy:{
            fontFamily: 'AkkuratPro',
            marginTop: '5px',
            fontSize: 16,
            lineHeight: 1.63,
            color: '#637696',
            '& span':{
                color: '#009cde',
            }
        },
        
    }))

function TandC() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    const classes = styles()
    return (
        <div className = {classes.container}>
           <div>
              <Checkbox
                 onChange={handleChange}
                 color="primary"
                 inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </div>
            <div className={classes.tAndCpolicy}>
               By clicking «Continue» you agree to our <span>Terms, Cookies Policy </span> and 
               <span>Privacy Policy.</span> You may receive email and SMS notifications from 
               us and can opt out at any time.
            </div>       
        </div>
    )
}

export default TandC
