import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/Topbar/TopBar";
import './app.css';
import Home from "./page/Home/Home";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
