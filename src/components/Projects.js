import "../style/Projects.css";
import reacticon from "../Images/devexp/logo512.png";
import css from "../Images/devexp/css3-colored.svg";
import html from "../Images/devexp/html5-colored.svg";
import js from "../Images/devexp/javascript-colored.svg";
import wp from "../Images/devexp/webpack-colored.svg";
import shopvideo from "../videos/shopPC.mp4";
import weathervideo from "../videos/weather.mp4";
import cvvideo from "../videos/cv.mp4";
import memoryvideo from "../videos/memory.mp4";
import calculatorvideo from "../videos/calculator.mp4";
import todovideo from "../videos/todo.mp4";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-container">
        <h1>Projects:</h1>
        <h1>...</h1>
        <div className="project">
          <video
            loop
            disablePictureInPicture
            muted
            autoPlay
            src={shopvideo}
          ></video>
          <div className="project-text">
            <h3>Shopping website</h3>
            <p>
              A fashion shopping website using firebase as a backend for
              products. Features a shop page with categories, product display
              page for all items, a cart with count and delete functions and
              more.
            </p>
            <div className="project-icons">
              <img src={html} alt="html"></img>
              <img src={css} alt="css"></img>
              <img src={js} alt="js"></img>
              <img src={reacticon} alt="react"></img>
              <img src={wp} alt="webpack"></img>
            </div>
            <div className="project-buttons">
              <a href="https://nexyusnex.github.io/shopping-cart/">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/NexyusNex/shopping-cart">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>github</title>
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                  View source code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <video
            loop
            disablePictureInPicture
            muted
            autoPlay
            src={weathervideo}
          ></video>
          <div className="project-text">
            <h3>Weather app</h3>
            <p>
              A site made using openWeather API. You can look up the weather for
              the location you searched for.
            </p>
            <div className="project-icons">
              <img src={html} alt="html"></img>
              <img src={css} alt="css"></img>
              <img src={js} alt="js"></img>
              <img src={wp} alt="webpack"></img>
            </div>
            <div className="project-buttons">
              <a href="https://nexyusnex.github.io/Weather-App/">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/NexyusNex/Weather-App">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>github</title>
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                  View source code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <video
            loop
            disablePictureInPicture
            muted
            autoPlay
            src={memoryvideo}
          ></video>
          <div className="project-text">
            <h3>Memory game</h3>
            <p>
              A simple memory game made using React.js where you cant click on
              the same card twice or score resets. Clicked image tracking resets
              once you clicked on all of them.
            </p>
            <div className="project-icons">
              <img src={html} alt="html"></img>
              <img src={css} alt="css"></img>
              <img src={js} alt="js"></img>
              <img src={reacticon} alt="react"></img>
              <img src={wp} alt="webpack"></img>
            </div>
            <div className="project-buttons">
              <a href="https://nexyusnex.github.io/memory-card/">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/NexyusNex/memory-card">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>github</title>
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                  View source code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <video
            loop
            disablePictureInPicture
            muted
            autoPlay
            src={cvvideo}
          ></video>
          <div className="project-text">
            <h3>CV editor</h3>
            <p>
              A simple website where you enter your information to make a CV
              when you press submit.
            </p>
            <div className="project-icons">
              <img src={html} alt="html"></img>
              <img src={css} alt="css"></img>
              <img src={js} alt="js"></img>
              <img src={reacticon} alt="react"></img>
              <img src={wp} alt="webpack"></img>
            </div>
            <div className="project-buttons">
              <a href="https://nexyusnex.github.io/cv-project/">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/NexyusNex/cv-project">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>github</title>
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                  View source code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <video
            loop
            disablePictureInPicture
            muted
            autoPlay
            src={calculatorvideo}
          ></video>
          <div className="project-text">
            <h3>Simple calculator</h3>
            <p>A functional calculator with keyboard button support.</p>
            <div className="project-icons">
              <img src={html} alt="html"></img>
              <img src={css} alt="css"></img>
              <img src={js} alt="js"></img>
            </div>
            <div className="project-buttons">
              <a href="https://nexyusnex.github.io/BasicCalculator/">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/NexyusNex/BasicCalculator">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>github</title>
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                  View source code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <video
            loop
            disablePictureInPicture
            muted
            autoPlay
            src={todovideo}
          ></video>
          <div className="project-text">
            <h3>To-do List</h3>
            <p>
              A website where you can track your project list with it's tasks.
              You can make new projects, delete them and do the same for tasks
              with an added addition of edit.
            </p>
            <div className="project-icons">
              <img src={html} alt="html"></img>
              <img src={css} alt="css"></img>
              <img src={js} alt="js"></img>
              <img src={reacticon} alt="react"></img>
              <img src={wp} alt="webpack"></img>
            </div>
            <div className="project-buttons">
              <a href="https://nexyusnex.github.io/To-do-list/">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/NexyusNex/To-do-list">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>github</title>
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                  View source code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
