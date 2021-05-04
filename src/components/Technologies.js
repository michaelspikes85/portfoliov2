import React from "react";
import html from "../images/html-logo.png";
import css from "../images/css-logo.png";
import js from "../images/JS-logo.png";
import bootstrap from "../images/bootstrap-logo.png";
import reactjs from "../images/reactjs-logo.png";
import mysql from "../images/mysql-logo.png";
import mongodb from "../images/mongodb-logo.png";
import handlebars from "../images/handlebars-logo.png";
import jquery from "../images/jquery-logo.png";
import nodejs from "../images/nodejs-logo.png";
import json from "../images/json-logo.png";
import github from "../images/github-logo.png";
import heroku from "../images/heroku-logo.png";
import vuejs from "../images/vuejs-logo.png";
import securityplus from "../images/securityplus-logo.png";

const Technologies = () => {
  return (
    <div className="technologies">
      <div className="container">
        <h1 id="technologies-heading" className="mb-5">
          Technology Skills
        </h1>
        <div className="row row-col-5 mb-3">
          <div className="col">
            <img src={html} className="technologies-logos" alt="html-logo..." />
          </div>
          <div className="col">
            <img src={css} className="technologies-logos" alt="css-logo..." />
          </div>
          <div className="col">
            <img src={js} className="technologies-logos" alt="js-logo..." />
          </div>
          <div className="col">
            <img
              src={reactjs}
              className="technologies-logos"
              alt="reactjs-logo..."
            />
          </div>
          <div className="col">
            <img
              src={bootstrap}
              className="technologies-logos"
              alt="bootstrap-logo..."
            />
          </div>
        </div>
        <div className="row row-col-5 mb-3">
          <div className="col">
            <img
              src={mysql}
              className="technologies-logos"
              alt="mysql-logo..."
            />
          </div>
          <div className="col">
            <img
              src={mongodb}
              className="technologies-logos"
              alt="mongodb-logo..."
            />
          </div>
          <div className="col">
            <img
              src={handlebars}
              className="technologies-logos"
              alt="handlebars-logo..."
            />
          </div>
          <div className="col">
            <img
              src={jquery}
              className="technologies-logos"
              alt="jquery-logo..."
            />
          </div>
          <div className="col">
            <img
              src={nodejs}
              className="technologies-logos"
              alt="nodejs-logo..."
            />
          </div>
        </div>
        <div className="row row-col-5 mb-3">
          <div className="col">
            <img src={json} className="technologies-logos" alt="json-logo..." />
          </div>
          <div className="col">
            <img
              src={github}
              className="technologies-logos"
              alt="github-logo..."
            />
          </div>
          <div className="col">
            <img
              src={heroku}
              className="technologies-logos"
              alt="heroku-logo..."
            />
          </div>
          <div className="col">
            <img
              src={vuejs}
              className="technologies-logos"
              alt="vuejs-logo..."
            />
          </div>
          <div className="col">
            <img
              src={securityplus}
              className="technologies-logos"
              alt="securityplus-logo..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
