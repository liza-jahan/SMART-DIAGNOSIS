import React, { Component, useState } from 'react';
import RegistrationPage from './RegistrationPage';



export default function LogInPage(){
        return (
            <div className='LogIn'>
            <LoginComponent/>
                
            </div>
        );
    }


function LoginComponent() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

  async function handelSubmit(event) {
    event.preventDefault();
    try{
        alert("User sing in Successfully");
    }
    catch{
        alert("User sing in not Successfully");
    }
  }


    return (
        <div className="Login">
        <form onSubmit={handelSubmit}>
            <div className="LoginForm">
                <div>
                    <label>email:</label>
                    <input type="text" name="email" onChange={(event) => {
                        setEmail(event.target.value);
                      }} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={(event)=>{
                        setPassword=(event.target.value)

                    }}/>
                </div>
                <div>
                    <button type="button" name="login">login</button>
                </div>
            </div>
            </form>
        </div>
    )
}