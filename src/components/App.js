import "../style/App.css";
import Aboutme from "./Aboutme";
import Footer from "./Footer";
import Home from "./Home";
import Navmenu from "./Navmenu";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Navmenu></Navmenu>
      <Aboutme></Aboutme>
      <Footer></Footer>
    </div>
  );
}

export default App;
