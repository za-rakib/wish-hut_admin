import "./app.css";
import Home from "./page/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./page/UserList/UserList";
import User from "./page/User/User";
import NewAdmin  from "./page/NewAdmin/NewAdmin";
import ProductList from "./page/ProductList/ProductList";
import Product from "./page/Product/Product";
import NewProduct from "./page/NewProduct/NewProduct";
import Login from "./page/Login/Login";
import { useState, useEffect } from "react";


function App() {
  const [loginCh, setLoginCh] = useState(false);
  const [admin, setAdmin] = useState(false);

//   const user = useSelector((state) => state.user && state.user.currentUser.isAdmin);
//   console.log("user" , user);

  const tokenId = JSON.parse(localStorage.getItem(`persist:root`))?.user;

  const isAdmin = tokenId && JSON.parse(tokenId).currentUser?.isAdmin;

  useEffect(() => {
    (async () => {
      await setAdmin(isAdmin);
    })();
  }, [isAdmin, loginCh]);

  //   console.log(localStorage.getItem("persist:root"));
  //   console.log(isAdmin);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={admin ? <Home /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="home"
          element={admin ? <Home /> : <Navigate to="/login" />}
        ></Route>

        <Route
          path="users"
          element={admin ? <UserList /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="user/:userId"
          element={admin ? <User /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="newAdmin"
          element={admin ? <NewAdmin /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="products"
          element={admin ? <ProductList /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="product/:productId"
          element={admin ? <Product /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="newProduct"
          element={admin ? <NewProduct /> : <Navigate to="/login" />}
        ></Route>

        <Route
          path="login"
          element={
            admin ? (
              <Navigate to="/" />
            ) : (
              <Login setLoginCh={setLoginCh} loginCh={loginCh} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
