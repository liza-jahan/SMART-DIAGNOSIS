import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import RegistrationPage from './user/RegistrationPage';

function App() {
    
        return (
            <div className='App'>
                <BrowserRouter>
                 <Switch>
                    <Route path='/' exact>
                      <RegistrationPage />
                    </Route>
                 </Switch>
                </BrowserRouter>
            </div>
        );
    }


export default App;