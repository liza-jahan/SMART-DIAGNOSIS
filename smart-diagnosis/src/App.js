import React, { Component } from 'react';
import {BrowserRouter,Switch,Router, Route,Routes} from 'react-router-dom';
import RegistrationPage from './user/RegistrationPage';
import LogInPage from './user/LogInPage';



function App() {
    
        return (
            <div className='App'>
            <Router>

    
            <Routes>
              <Route exact path="/" element={<RegistrationPage />} />
              
            </Routes>
          </Router>
            </div>
        );
    }


export default App;