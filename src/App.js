import './App.scss';
import HomePage from "./components/HomePage";
import NavMenu from './components/NavMenu';
import Destination from './components/Destination';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import data from "./data.json";

function App() {
  console.log(data)
  const destinations = data.destinations
  const crew = data.crew
  const technology = data.technology

  console.log(destinations, crew, technology)

  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/destination" element={<Destination destinations={destinations} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
