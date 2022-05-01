import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/Topbar/TopBar";
import "./app.css";
import Home from "./page/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./page/UserList/UserList";
import User from "./page/User/User";
import NewUser from "./page/NewUser/NewUser";
import ProductList from "./page/ProductList/ProductList";
import Product from "./page/Product/Product";
import NewProduct from "./page/NewProduct/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="users" element={<UserList />}></Route>
          <Route path="user/:userId" element={<User />}></Route>
          <Route path="newUser" element={<NewUser />}></Route>
          <Route path="products" element={<ProductList />}></Route>
          <Route path="product/:productId" element={<Product />}></Route>
          <Route path="newProduct" element={<NewProduct />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
