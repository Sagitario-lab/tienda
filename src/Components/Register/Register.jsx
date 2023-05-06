import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Register.css'
import TextField from '@mui/material/TextField';

const Register = ({
  isLoggedIn,
  setIsLoggedIn,
  user,
  setUser,
  password,
  setPassword,
}) => {
  const navigator = useNavigate();

  const addUser = () => {
    axios
      .post("http://localhost:3000/api/users", {
        user,
        password,
      })
      .then((res) => {
        setUser("");
        setPassword("");
        let uwu = res.data;
        if (uwu === "User is already registered") {
          alert("User is already registered");
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
          navigator("/");
        }
      });
  };

  return (
    <>
      <div>Register</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser();
        }}
      >
        <div>
          <label htmlFor='user'>Username</label>
          <input
            type='text'
            placeholder='user'
            id='user'
            onChange={(e) => {
              setUser(e.target.value);
            }}
          ></input>
          
     
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='password'
            id='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button>Register!</button>
      </form>
    </>
  );
};

export default Register;
