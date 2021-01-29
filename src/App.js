import React, { useState } from "react";
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Contact from './pages/contact/contact.component';

import { AppContext } from "./libs/contextLibs";

export default function App() {

  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <div>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInSignUp} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </AppContext.Provider>
    </div>
  );
}
