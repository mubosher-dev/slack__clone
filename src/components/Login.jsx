import React, { useState } from 'react'
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer'

function Login() {

    const [state,dispatch] = useStateValue()

    const signIn = (e) => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));

    };

    return (
        <div className='login'>
            <div className="login__container">
                <img
                    className='login__img'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" alt="logo" />
                <h1> Sign in to Mubosher Programmer HQ</h1>
                <p>muydinovmubosher.slack</p>
                <Button
                    onClick={signIn}
                    className="google__btn"
                >
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login