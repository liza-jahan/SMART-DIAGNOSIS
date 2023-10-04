import React, { Component, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../CSS/Registration_style.css";
import LogInPage from "./LogInPage";
import { Link } from 'react-router-dom';



function RegistrationPage() {
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  
  // useEffect(() =>{
  //   (async()=> await Load())()
  //  },[]);

//   async function Load(){
// const result =await axios.get
// //(
//   // "http://localhost:8080/api/v1/getAll");
//   setUserName(result.data);
//   console.log(result.data);
  
 
// }
  async function handelSubmit(event) {
    event.preventDefault();
    try {
      // await axios.post("http://localhost:8080/api/v1/save", 
      // {
      //   id: id,
      //   userName: userName,
      //   email: email,
      //   phoneNumber: phoneNumber,
      //   password: password,
      // });
      alert("User Registation Successfully");
      // setId("");
      // setUserName("");
      // setEmail("");
      // setPhoneNumber("");
      // setPassword("");
    } catch (err) {
      alert("User Registation Failed");
    }
  }
  return (
    <div className="register-container">
      <form onSubmit={handelSubmit}>
        <br></br>
        <h1>Registration</h1>
        <p>Fill in the Information Below</p>

        <input
          type="text"
          name="id"
          placeholder="id"
          onChange={(event) => {
            setId(event.target.value);
          }}
        />

        <input
          type="text"
          name="userName"
          placeholder="username"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />

        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          type="text"
          name="phoneNumber"
          placeholder="phone number"
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button type="submit">Register</button>
        
        <button type="submit"><Link to="login">LogIn</Link></button>
      </form>
    </div>
  );
}

export default RegistrationPage;
