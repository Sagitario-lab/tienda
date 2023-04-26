import Grid from "@mui/material/Grid";
import logoTienda from "../Imgs/logo.png";
import "./Header.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={12}>
        <img
          src={logoTienda}
          alt='logo de la tienda'
          className='logo-img'
        ></img>
      </Grid>
    </Grid>
  );
};

export default Header;
