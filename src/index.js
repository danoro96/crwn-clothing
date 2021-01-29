import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import App from './App';

// Configure amplify
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


ReactDOM.render(
  
  <BrowserRouter>
    < App />
  </BrowserRouter>
    
  , document.getElementById('root')
);
