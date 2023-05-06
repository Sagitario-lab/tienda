import { Grid, Card, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const MostradorSelect = ({isLoggedIn, setItemsToBuy, itemsToBuy}) => {
  
  let { selection} = useParams();
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
            <Card style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
              <Link to={`/${item.title}`} className='card nav-link'>
                <img src={item.image} className='item'></img>
                <div className='item-title'>{item.title}</div>
                <div>${item.price} USD</div>
              </Link>
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

export default MostradorSelect;
