import React from 'react'
import './Login.css'
import Button from '@mui/material/Button';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvicer';
import {actionTypes} from './reducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => 
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        )
        .catch(error => alert(error.message))
    };
    
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.ibb.co/h1k6YDg/Whats-App-svg.png" alt="WhatsApp Logo"/>

                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
