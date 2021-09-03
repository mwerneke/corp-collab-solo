import React, { useEffect } from 'react';
import Header from "../Header";
import SideBar from '../SideBar';
import Library from '../Library';
import OpenRequests from '../OpenRequests';
import Example from '../Example';
import Footer from '../Footer';
import AddRequests from '../AddRequests';
import Home from '../Home';
import "../App.css";

import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';


import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';



function App() {

  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <div className="app">
      {/* <h1>let build solo</h1> */}
      <Router>

         <Header /> 
        {/* <SideBar /> */}
        <div className="app__page">
          <Route path='/home' exact>
            <SideBar />
            <Home/>
          </Route>
          <Route path='/addtolibrary'>
            <SideBar />
            <br/>
            
            <Example />  
          </Route>
          <Route path='/addrequest'>
            <SideBar />
            <AddRequests/>
          </Route>
          <Route path='/openrequest'>
            <SideBar />
            <OpenRequests/>
          </Route>
          <Route path='/library' exact>
            <SideBar />
            <Library />
            
          </Route>
        </div>

        <Footer/>
        <div className="library">
        <Library />
        </div>
      </Router>
    </div>
  );
}

export default App;

