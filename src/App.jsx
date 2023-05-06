import "./App.css";
import Header from "./Components/Header/Header";
import Mostrador from "./Components/Mostrador/Mostrador";
import MostradorSelect from "./Components/MostradorSelect/MostradorSelect";
import Register from "./Components/Register/Register";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login/Login";
import SingleItem from "./Components/SingleItem/SingleItem";
import Cart from "./Components/Cart/Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [itemsToBuy, setItemsToBuy] = useState([]);
  


  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        user={user}
        itemsToBuy={itemsToBuy}
      ></Header>

      <Routes>
        <Route
          path='/login'
          element={
            <Login
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
              setUser={setUser}
              password={password}
              setPassword={setPassword}
            ></Login>
          }
        ></Route>
        
        <Route path="/shoppingcart" element={<Cart itemsToBuy={itemsToBuy} setItemsToBuy={setItemsToBuy}></Cart>}></Route>

        <Route
          exact
          path='/'
          element={
            <Mostrador
              itemsToBuy={itemsToBuy}
              setItemsToBuy={setItemsToBuy}
              isLoggedIn={isLoggedIn}
            ></Mostrador>
          }
        ></Route>

        <Route
          path='/category/:selection'
          element={<MostradorSelect isLoggedIn={isLoggedIn} itemsToBuy={itemsToBuy} setItemsToBuy={setItemsToBuy}></MostradorSelect>}
        ></Route>

        <Route path='/item/:itemId' element={<SingleItem></SingleItem>}></Route>
        <Route
          path='/register'
          element={
            <Register
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
              setUser={setUser}
              password={password}
              setPassword={setPassword}
            ></Register>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
