import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "./Login.css";
import { Button, Grid } from "@mui/material";

const Login = ({
  user,
  setUser,
  password,
  setPassword,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  let navigator = useNavigate();
  const login = () => {
    axios
      .post("http://localhost:3000/api/login", {
        user,
        password,
      })
      .then((res) => {
        let data = res.data;

        if (data.length === 1) {
          setIsLoggedIn(true);
          navigator("/");
        } else {
          setIsLoggedIn(false);
          alert("user not found");
        }
      });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        className='form'
      >
        <TextField
          id='outlined-basic'
          label='Username'
          variant='outlined'
          onChange={(e) => {
            setUser(e.target.value);
          }}
        ></TextField>

        <TextField
          id='outlined-basic'
          label='Password'
          variant='outlined'
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></TextField>

        <Button type='submit' variant='contained'>
          Login
        </Button>
        <Link to={"/register"}>¿Not registered yet?</Link>
      </form>
      </Grid>
    </Grid>
  );
};

export default Login;
