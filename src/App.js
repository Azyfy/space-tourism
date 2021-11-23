import './App.scss';
import HomePage from "./components/HomePage";
import NavMenu from './components/NavMenu';
import Destination from './components/Destination';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/destination" element={<Destination/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
