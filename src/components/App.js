import { useEffect } from "react";
import "../style/App.css";
import Aboutme from "./Aboutme";
import Footer from "./Footer";
import Home from "./Home";
import Navmenu from "./Navmenu";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hidden = document.querySelectorAll(".hidden");
    hidden.forEach((el) => observer.observe(el));
  }, []);

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
