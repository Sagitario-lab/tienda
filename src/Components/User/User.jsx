import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    console.log(localStorage.getItem("user"));
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {connected ? <>Usuario</> : null}

      {connected ? (
        <div>carrito</div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Link to={"/register"}>Log in</Link>
          <Link to={"/"}>Home</Link>
        </div>
      )}
    </div>
  );
};

export default User;
