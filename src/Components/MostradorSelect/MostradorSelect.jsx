import { Grid, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const MostradorSelect = () => {
  let { selection } = useParams();
  const [itemsSelected, setItemsSelected] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        let items = json.filter((data) => {
          return data.category === selection;
        });
        setItemsSelected(items);
      });
  }, [selection]);

  return (
    <Grid container>
      <NavBar></NavBar>
      {itemsSelected.map((item) => {
        return (
          <Grid item xs={12} key={item.title}>
            <Card className='card'>
              <img src={item.image} className='item'></img>
              <div className='item-title'>{item.title}</div>
              <div>${item.price} USD</div>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MostradorSelect;
