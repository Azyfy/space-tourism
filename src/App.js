import './App.scss';
import HomePage from "./components/HomePage";
import NavMenu from './components/NavMenu';

function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
