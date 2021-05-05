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
      <h1 id="technologies-heading" className="mb-5">
        Technology Skills
      </h1>
      <div className="row row-col-5 mb-3">
        <div className="col">
          <img
            src={html}
            className="technologies-logos img-fluid"
            alt="html-logo..."
          />
        </div>
        <div className="col">
          <img
            src={css}
            className="technologies-logos img-fluid"
            alt="css-logo..."
          />
        </div>
        <div className="col">
          <img
            src={js}
            className="technologies-logos img-fluid"
            alt="js-logo..."
          />
        </div>
        <div className="col">
          <img
            src={reactjs}
            className="technologies-logos img-fluid"
            alt="reactjs-logo..."
          />
        </div>
        <div className="col">
          <img
            src={bootstrap}
            className="technologies-logos img-fluid"
            alt="bootstrap-logo..."
          />
        </div>
      </div>
      <div className="row row-col-5 mb-3">
        <div className="col">
          <img
            src={mysql}
            className="technologies-logos img-fluid"
            alt="mysql-logo..."
          />
        </div>
        <div className="col">
          <img
            src={mongodb}
            className="technologies-logos img-fluid"
            alt="mongodb-logo..."
          />
        </div>
        <div className="col">
          <img
            src={handlebars}
            className="technologies-logos img-fluid"
            alt="handlebars-logo..."
          />
        </div>
        <div className="col">
          <img
            src={jquery}
            className="technologies-logos img-fluid"
            alt="jquery-logo..."
          />
        </div>
        <div className="col">
          <img
            src={nodejs}
            className="technologies-logos img-fluid"
            alt="nodejs-logo..."
          />
        </div>
      </div>
      <div className="row row-col-5 mb-3">
        <div className="col">
          <img
            src={json}
            className="technologies-logos img-fluid"
            alt="json-logo..."
          />
        </div>
        <div className="col">
          <img
            src={github}
            className="technologies-logos img-fluid"
            alt="github-logo..."
          />
        </div>
        <div className="col">
          <img
            src={heroku}
            className="technologies-logos img-fluid"
            alt="heroku-logo..."
          />
        </div>
        <div className="col">
          <img
            src={vuejs}
            className="technologies-logos img-fluid"
            alt="vuejs-logo..."
          />
        </div>
        <div className="col">
          <img
            src={securityplus}
            className="technologies-logos img-fluid"
            alt="securityplus-logo..."
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
