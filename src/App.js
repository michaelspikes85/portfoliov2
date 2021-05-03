import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#b36d00",
            },
            shape: {
              type: "char",
              character: {
                value: ["M", "i", "c", "h", "a", "e", "l", "S", "p", "k", "s"],
                font: "Monaco",
                style: "",
                weight: "400",
                fill: true,
              },
            },
            stroke: {
              width: 2,
              color: "#048eff",
            },
            opacity: {
              value: 0.4,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 16,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                size_min: 10,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#0263B3",
              opacity: 0.7,
              width: 2,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
                speed: 1,
              },
              repulse: {
                distance: 100,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
    </>
  );
}

export default App;
