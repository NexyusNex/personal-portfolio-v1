import "../style/Aboutme.css";
import meImg from "../Images/me.png";

export default function Aboutme() {
  return (
    <div className="Aboutme">
      <h1>About me</h1>
      <h1>...</h1>
      <img src={meImg} alt="me"></img>
      <p>
        I am a young fast learning and self motivated individual open to new
        experiences and I am always looking for self improvement. Passionate
        about everything that involves computers and programming and I regularly
        engage in hobbies that involve them.
      </p>
      <div className="findme-links">
        <h2>You can find me here:</h2>
      </div>
    </div>
  );
}
