import "../style/Navmenu.css";

export default function Navmenu() {
  function toggleMenu() {
    document.querySelector(".Nav-menu").classList.toggle("animate");
  }

  const handleClickScroll = (e) => {
    const link = e.target.getAttribute("data-link");
    const element = document.querySelector(`${link}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Nav-menu">
      <button className="hamburger-button" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>menu</title>
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </button>
      <h1>Nemanja Mitić</h1>
      <div className="nav-links">
        <button data-link=".Home" onClick={handleClickScroll}>
          Home
        </button>
        <button data-link=".Aboutme" onClick={handleClickScroll}>
          About me
        </button>
        <button data-link=".findme-links" onClick={handleClickScroll}>
          Experience
        </button>
        <button data-link=".interests-container" onClick={handleClickScroll}>
          Interests
        </button>
        <button data-link=".projects-container" onClick={handleClickScroll}>
          Projects
        </button>
        <button data-link=".Aboutme" onClick={handleClickScroll}>
          Source code
        </button>
      </div>
    </div>
  );
}
