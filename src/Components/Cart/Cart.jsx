import { Button, Card, Grid } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Cart.css";

const Cart = ({ itemsToBuy, setItemsToBuy }) => {
  let arr = itemsToBuy;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (arr.length > 0) {
      let ttl = arr.reduce((acc, item) => acc + item.price, 0);
      setTotal(ttl);
    }
  }, [arr]);

  const deleteItems = (itemForDelete) => {
    let newArr = arr.filter(
      (itemSelected) => itemSelected.item !== itemForDelete
    );
    setItemsToBuy(newArr);
  };

  return (
    <>
      {arr.length === 0 ? (
        <Grid container className='noItems'>
          <Grid item xs={12}>
            You haven't chosen anything to buy yet!
          </Grid>
          <Grid item xs={12}>
            <Link to={"/"}>
              <Button variant='contained'>Let´s Buy!</Button>
            </Link>
          </Grid>
        </Grid>
      ) : (
        <Grid container className='cont-items'>
          {arr.map((item, idx) => {
            return (
              <Grid item key={idx} xs={12}>
                <Card className='card'>
                  <div>{item.item}</div>
                  <div className='price-remove'>
                    ${item.price} USD
                    <Button
                      variant='outlined'
                      color='error'
                      onClick={() => {
                        deleteItems(item.item);
                      }}
                    >
                      <DeleteForeverIcon></DeleteForeverIcon>
                    </Button>
                  </div>
                </Card>
              </Grid>
            );
          })}
          <div className="total-buy">
            <div>Total: {total}</div>
            <Button variant='contained' color='success'>
              BUY!
            </Button>
          </div>
        </Grid>
      )}
    </>
  );
};

export default Cart;
