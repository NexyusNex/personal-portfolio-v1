import "../style/Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="home-content">
        <h1>
          Hello! I am <span>Nemanja Mitić!</span>
        </h1>
        <p>A Frontend developer</p>
      </div>
      <div className="scroll-box">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
