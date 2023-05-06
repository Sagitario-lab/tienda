import { Button, Card, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "./Mostrador.css";
import { Link } from "react-router-dom";

const Mostrador = ({ itemsToBuy, setItemsToBuy, isLoggedIn }) => {
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
        <NavBar></NavBar>
      </Grid>
      {items.map((item) => {
        return (
          <Grid key={item.id} item xs={12} sm={7}>
            <Card className='card'>
              <img src={item.image} className='item'></img>
              <div className='item-title'>{item.title}</div>
              <div>${item.price} USD</div>

              {isLoggedIn ? (
                <Button
                  variant='contained'
                  onClick={() => {
                    setItemsToBuy([
                      ...itemsToBuy,
                      { item: item.title, price: item.price },
                    ]);
                  }}
                >
                  ADD
                </Button>
              ) : null}
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Mostrador;
