import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/pages/home/home';
import Contact from './component/pages/contactus/contact';
import AboutUs from './component/pages/aboutus/about';
import SignIn from './component/pages/signin/signin';
import Review from './component/pages/review/review';
import Transaction from './component/pages/transaction/transaction';
import SignUp from './component/pages/signup/signup';
import './App.css';



function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={AboutUs}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/review" component={Review}/>
              <Route path="/signin" component={SignIn}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/transaction" component={Transaction}/>
          </Switch>
      </main>
  )
}

export default App;
