import React from "react";
import checkpoint from "../images/projects/Checkpoint-screenshot.jpg";
import codeTrivia from "../images/projects/Code-Trivia-screenshot.jpg";
import weatherApp from "../images/projects/Weather-App-screenshot.jpg";

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // CHECKPOINT
  const openPopupboxCheckpoint = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={checkpoint}
          alt="Checkpoint Screenshot..."
        />
        <p>explaination</p>
        <b>Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/michaelspikes85/Checkpoint")
          }
        >
          https://github.com/michaelspikes85/Checkpoint
        </a>
        <b>Github:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/michaelspikes85/Checkpoint")
          }
        >
          https://github.com/michaelspikes85/Checkpoint
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCheckpoint = {
    titleBar: {
      enable: true,
      text: "Checkpoint Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // CODE TRIVIA
  const openPopupboxCodeTrivia = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={codeTrivia}
          alt="Code Trivia Screenshot..."
        />
        <p>explaination</p>
        <b>Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://michaelspikes85.github.io/Code-Trivia/index.html",
              "_blank"
            )
          }
        >
          https://michaelspikes85.github.io/Code-Trivia/index.html
        </a>
        <br />
        <b>Github:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/michaelspikes85/Code-Trivia",
              "_blank"
            )
          }
        >
          https://github.com/michaelspikes85/Code-Trivia
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCodeTrivia = {
    titleBar: {
      enable: true,
      text: "Code Trivia App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // WEATHER APP
  const openPopupboxWeatherApp = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={weatherApp}
          alt="Weather App Screenshot..."
        />
        <p>explaination</p>
        <b>Github:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/michaelspikes85/Weather-App")
          }
        >
          https://github.com/michaelspikes85/Weather-App
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigWeatherApp = {
    titleBar: {
      enable: true,
      text: "Weather App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxCheckpoint}>
            <img
              className="portfolio-image"
              src={checkpoint}
              alt="Checkpoint Screenshot..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxCodeTrivia}>
            <img
              className="portfolio-image"
              src={codeTrivia}
              alt="Code Trivia Screenshot..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxWeatherApp}>
            <img
              className="portfolio-image"
              src={weatherApp}
              alt="Weather App Screenshot..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigCheckpoint} />
      <PopupboxContainer {...popupboxConfigCodeTrivia} />
      <PopupboxContainer {...popupboxConfigWeatherApp} />
    </div>
  );
};

export default Portfolio;
