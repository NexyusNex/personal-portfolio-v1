import "../style/App.css";
import Aboutme from "./Aboutme";
import Home from "./Home";
import Navmenu from "./Navmenu";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Navmenu></Navmenu>
      <Aboutme></Aboutme>
    </div>
  );
}

export default App;
