import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import RegistrationPage from './user/RegistrationPage';
import LogInPage from './user/LogInPage';

function App() {
    
        return (
            <div className='App'>
                <BrowserRouter>
                 <Switch>
                    <Route path='/' exact>
                      <RegistrationPage />
                    </Route>
                 </Switch>
                 <Switch>
                 <Route path='/login' exact>
                   <LogInPage />
                 </Route>
              </Switch>
                </BrowserRouter>
            </div>
        );
    }


export default App;