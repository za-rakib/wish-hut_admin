import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/Topbar/TopBar";
import './app.css';

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <Sidebar />
        <div className="others">others.............</div>
      </div>
    </div>
  );
}

export default App;
