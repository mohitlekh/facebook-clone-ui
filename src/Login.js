import React from 'react';
import Button from '@material-ui/core/Button';
import './Login.css';
import {auth, provider } from './firebase.js';
import { actionTypes } from './Reducer.js';
import { useStateValue } from './StateProvider.js';



function Login() {
    const [state, dispatch] = useStateValue();
    const signIn=() => {
        //signin...
        auth.signInWithPopup(provider)
        .then( result => {

            dispatch({

                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch( (error) => alert(error.message));

    };
    return (
        <div className= "login">
            <div className="login__logo">
                <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png' />
                <img src='https://www.g4f-records.com/wp-content/uploads/2016/09/logo-facebook.png' />
            </div>
            <Button type="submit" onClick={signIn} >
                Sign In
            </Button>
        </div>
    )
}

export default Login 
