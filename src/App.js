import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/Topbar/TopBar";
import "./app.css";
import Home from "./page/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./page/UserList/UserList";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route  path="home" element={<Home />}></Route>
          <Route path="users" element={<UserList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
