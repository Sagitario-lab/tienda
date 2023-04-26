import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        let arr = [];
        json.map((data) => {
          let item = arr.includes(data.category);
          if (item == false) {
            arr.push(data.category);
          }
        });
        setItems(arr);
      });
  }, []);

  return (
    <Grid container className='nav-cont'>
      {items && (
        <>
          {items.map((item) => {
            return (
              <Link to={"/" + item} key={item} className='nav-link'>
                {item}
              </Link>
            );
          })}
        </>
      )}
    </Grid>
  );
};

export default NavBar;
