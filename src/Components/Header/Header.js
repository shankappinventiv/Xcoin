import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'
import Logo from './Logo'
import NavBar from './NavBar'
import HeaderButton from './HeaderButton'
import CreateAcc from '../CreateAcc.js/CreateAcc'
import Stepper from '../Stepper/Stepper'

const styles = makeStyles(theme =>
    createStyles({

    }))

export default function Header() {
    return (
        <div>
            <Logo />
            <NavBar />
            <HeaderButton headerButton = "LOGIN" />
            <HeaderButton headerButton = "SIGN UP" />
            <CreateAcc creat = 'Create account'/>
            <Stepper />
        </div>
    )
}
