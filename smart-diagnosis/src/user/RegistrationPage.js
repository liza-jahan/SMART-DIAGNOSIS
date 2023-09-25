import React, { Component } from "react";
import axios from "axios";
import { useState } from "react";
import "../CSS/Registration_style.css";

function RegistrationPage() {
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/save", {
        id: id,
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      });
      alert("User Registation Successfully");
      setId("");
      setUserName("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
    } catch (err) {
      alert("User Registation Failed");
    }
  }
  return (
    <div className="register-container">
      <form className="register-form">
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
          onChange={handlePhoneNumberChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={handlePasswordChange}
        />

        <button type="submit" name="singup" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
