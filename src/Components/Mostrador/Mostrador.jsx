import { Card, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "./Mostrador.css";

const Mostrador = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });

  }, []);
  return (
    <Grid container spacing={2} className='items'>
      <Grid item xs={12}>
        <NavBar></NavBar>a
      </Grid>
      {items.map((item) => {
        return (
          <>
            <Grid item xs={12}>
              <Card className='card'>
                <img src={item.image} className='item'></img>
                <div className='item-title'>{item.title}</div>
                <div>${item.price} USD</div>
              </Card>
            </Grid>
          </>
        );
      })}w
    </Grid>
  );
};

export default Mostrador;
