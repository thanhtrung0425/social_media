import {Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import "./Login.css"

function Login() {

    function SignInAccount() {
        return "10";
    }


    return (
        <Grid>
            <Paper className='paper_logo' elevation={10}>
                <Grid className='grid_logo'>
                    <img src="https://st4.depositphotos.com/5868334/23704/v/450/depositphotos_237042306-stock-illustration-creative-initial-letter-black-colors.jpg" alt=""/>
                    <h2>Sign In</h2>
                </Grid>
                <TextField className="text_field" id='username' label="Username" placeholder='Enter username' required />
                <TextField className="text_field" id='password' label="Password" placeholder='Enter password' type="password" required />

                <Button className='btnSubmit' onClick={SignInAccount} type='submit' color="primary" variant='contained'>Sign in</Button>

                <div className="link">
                    <Typography>
                        <Link href='#'>Forgot password?</Link>
                    </Typography>
                    <Typography> Do you have an account?
                        <Link href='#'>Sign Up?</Link>
                    </Typography>
                </div>
            </Paper>
        </Grid>
    )
}

export default Login