import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logoTienda from "../Imgs/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "@mui/material";

const Header = ({ isLoggedIn, setIsLoggedIn, user }) => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#11cb5f",
      },
      home: {
        main: "#000000",
      },
      login: {
        main: "#7fd41d",
      },
    },
  });
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={12} style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {isLoggedIn ? (
            <div className='user-shopIcon'>
              <div className='user-logOut'>
                <div className='user'>{user}</div>
                <Button
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                  variant='outlined'
                  className='logout-btn'
                  color='error'
                >
                  LogOut
                </Button>
              </div>
              <Link to={"/shoppingcart"} className='cart'>
                <LocalGroceryStoreIcon />
              </Link>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <ThemeProvider theme={theme}>
                <Button variant='contained'>
                  <Link to={"/login"} className='link-login'>
                    Log in
                  </Link>
                </Button>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Button variant='contained' color='home'>
                  <Link to={"/"} className='link-login'>
                    Home
                  </Link>
                </Button>
              </ThemeProvider>
            </div>
          )}
        </div>
      </Grid>
      <Grid item xs={12}>
        <Link to={"/"}>
          <img
            src={logoTienda}
            alt='logo de la tienda'
            className='logo-img'
          ></img>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
