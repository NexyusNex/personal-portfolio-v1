import "../style/Navmenu.css";

export default function Navmenu() {
  return (
    <div className="Nav-menu">
      <button className="hamburger-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>menu</title>
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </button>
      <h1>Nemanja Mitić</h1>
      <p>About me</p>
      <p>Experience</p>
      <p>Interests</p>
      <p>Projects</p>
      <p>Source code</p>
    </div>
  );
}
