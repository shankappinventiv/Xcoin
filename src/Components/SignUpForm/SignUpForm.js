import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'
import InputField from './InputField'
import TandC from './TandC'
import ContinueButton from './ContinueButton'
import SignUpViaFb from './SignUpViaFb'

const styles = makeStyles(theme =>
    createStyles({

    }))
function SignUpForm() {
    // const classes = styles()
    return (
        <div>
            <InputField name = 'Name*' />
            <InputField name = 'Name*' />
            <InputField name = 'Name*' />
            <InputField name = 'Name*' />
            <TandC />
            <ContinueButton />
            <SignUpViaFb />
        </div>
    )
}

export default SignUpForm
