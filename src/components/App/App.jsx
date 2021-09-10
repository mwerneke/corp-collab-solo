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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
    <Router>
      {/* <Header /> */}
      <div>

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            {/* <AboutPage /> */}
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/home"
          >
            <Header />
            <div className="app__page">
              <SideBar />
              <Home />
            </div>
          </ProtectedRoute>


          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/home"
          >
            <Header />
            <div className="app__page">
              <SideBar />
              <Home />
            </div>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/addrequests"
          >
            <Header />
            <div className="app__page">
              <SideBar />
              <AddRequests />
            </div>

          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/openrequests"
          >
            <Header />
            <div className="app__page">
              <SideBar />
              <OpenRequests />
            </div>

          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/addtolibrary"
          >
            <Header />
            <div className="app__page">
              <SideBar />
              {/* <FetchTicket/> */}
              <Example />
            </div>

          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/library"
          >
            <Header />
            <div className="app__page">
              <SideBar />
              <Library />
            </div>

          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/librarysearch"
          >
            <Header />
            <div className="app__page">
              <SideBar />

            </div>

          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>

        </Switch>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
//   return (
//     <div className="app">
//       {/* <h1>let build solo</h1> */}
//       <Router>

//          <Header /> 
//         {/* <SideBar /> */}
//         <div className="app__page">
//           <Route path='/home' exact>
//             <SideBar />
//             <Home/>
//           </Route>
//           <Route path='/addtolibrary'>
//             <SideBar />
//             <br/>

//             <Example />  
//           </Route>
//           <Route path='/addrequest'>
//             <SideBar />
//             <AddRequests/>
//           </Route>
//           <Route path='/openrequest'>
//             <SideBar />
//             <OpenRequests/>
//           </Route>
//           <Route path='/library' exact>
//             <SideBar />
//             <Library />

//           </Route>
//         </div>

//         <Footer/>
//         <div className="library">
//         {/* <Library /> */}
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;

