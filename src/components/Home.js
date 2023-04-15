import { useCallback } from "react";
import "../style/Home.css";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const handleClickScroll = () => {
    const element = document.querySelector(".projects-container");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: {
              value: 0,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffff00",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
              random: false,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0,
                sync: false,
              },
            },
            size: {
              value: 8,
              random: { enable: true, minimumValue: 4 },
              animation: {
                enable: false,
                speed: 20,
                minimumValue: 4,
                sync: false,
              },
            },
            move: {
              enable: true,
              gravity: {
                enable: true,
                acceleration: -0.5,
              },
              speed: 5,
              direction: "top",
              random: false,
              straight: false,
              outModes: {
                default: "destroy",
                bottom: "none",
              },
              attract: {
                enable: true,
                distance: 300,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
          },
          detectRetina: true,
          background: {
            color: "none",
          },
          emitters: [
            {
              direction: "top",
              particles: {
                color: "#7aa9ff",
              },
              rate: {
                quantity: 1,
                delay: 0.1,
              },
              size: {
                width: 100,
                height: 10,
              },
              position: {
                x: 100,
                y: 100,
              },
            },
            {
              direction: "top",
              particles: {
                color: "#004ede",
              },
              rate: {
                quantity: 1,
                delay: 0.1,
              },
              size: {
                width: 100,
                height: 10,
              },
              position: {
                x: 50,
                y: 100,
              },
            },
          ],
        }}
      />
      <div className="home-content">
        <h1>
          Hello! I am <span>Nemanja Mitić!</span>
        </h1>
        <p>A Frontend developer</p>
      </div>
      <button className="work-button" onClick={handleClickScroll}>
        See my work
      </button>
      <div className="scroll-box">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
