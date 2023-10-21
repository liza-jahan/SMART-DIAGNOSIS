import React, { Component, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../CSS/Registration_style.css";
import LogInPage from "./LogInPage";
import { Link,  useParams } from "react-router-dom";
import navigate from "react-router-dom"
import useNavigate from "react-router-dom"




export default function RegistrationPage() {
  // const [id, setId] = useState("");
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [password, setPassword] = useState("");
  let navigate=useNavigate();
  const [user, setUser]= useState({
    userName:"",
    email:"",
   phoneNumber:"",
   password:"",


  });

  const {userName, email, phoneNumber,password}=user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/save", user);
    navigate("/");
  }
  
  return (
    <div className="register-container">
    <form onSubmit={(e) => onSubmit(e)}>
        <br></br>
        <h1>Registration</h1>
        <p>Fill in the Information Below</p>

        // input
        //   type={"text"}
        //   name="id"
        //   placeholder="id"
        //   onChange={(event) => onInputChange(event)}
        // /
        <label htmlFor="Name" className="form-label">
        User Name
      </label>
        <input
          type="text"
          name="userName"
          placeholder="username"
          onChange={(event) => onInputChange(event)}
        />
        <label htmlFor="Name" className="form-label">
        Email
      </label>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(event) => onInputChange(event)}
        />
        <label htmlFor="Name" className="form-label">
       phone numnber
      </label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="phone number"
          onChange={(event) => onInputChange(event)}
        />
        <label htmlFor="Name" className="form-label">
      Password
      </label>
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(event) => onInputChange(event)}
        />

        <button type="submit">Register</button>
        
        <button type="submit"><Link to="login">LogIn</Link></button>
      </form>
    </div>
  );
}

