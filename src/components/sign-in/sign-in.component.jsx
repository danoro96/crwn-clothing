import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'

import { Auth } from 'aws-amplify';

import { useAppContext } from "../../libs/contextLibs";

import { useHistory } from "react-router-dom";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { userHasAuthenticated } = useAppContext();

    const history = useHistory();
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    async function handleSubmit(event) {
      event.preventDefault();

      try {
        await Auth.signIn(email, password);
        userHasAuthenticated(true);
        history.push("/");
      } catch (e) {
        alert(e.message);
      }

    }  

    return(
        <div className='sign-in'>

            <h2> I already have an account </h2>
            <span> Sign in with your email and password </span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email'
                    type='email' 
                    value={ email }
                    onChange={(e) => setEmail(e.target.value)}
                    label='email'
                    required
                    autoFocus
                />

                <FormInput
                    name='password'
                    type='password'
                    value={ password }
                    onChange={(e) => setPassword(e.target.value)}
                    label='password'
                    required
                    autoFocus
                />

                <div className='buttons'>
                    <CustomButton type='submit' disabled={!validateForm()}> Sign In </CustomButton>
                </div>
            </form>

        </div>
    )
}