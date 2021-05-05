import React from "react";
import author from "../images/about-me.jpg";

const AboutMe = () => {
  return (
    <div className="py-5 d-flex">
      <img id="profile-img" src={author} alt="Author..." />

      <div className="d-flex flex-column align-items-center ml-5">
        <h1 id="about-me-heading">About Me</h1>
        <p id="about-me-para" className="text-justify">
          Greetings and welcome to my portfolio. I am Michael, I am a full stack
          developer that recently graduated from Georgia Tech's Full Stack
          Development Boot Camp. During this course I developed the skill to
          create web sites and applications using the MERN (MongoDB, Express,
          ReactJS, and NodeJS) stack. Since then I have taught myself VueJS and
          plan to learn a lot more. This is not the extent of my skills, refer
          to the technologies section to learn more!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
