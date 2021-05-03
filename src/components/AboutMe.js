import React from "react";
import author from "../images/about-me.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5 mr-3">
            <img id="profile-img" src={author} alt="Author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 id="about-me-heading">About Me</h1>
          <p id="about-me-para">
            Greetings and welcome to my portfolio. I am Michael, I am a full
            stack developer that recently graduated from Georgia Tech's Full
            Stack Development Boot Camp. During this course I developed the
            skill to create web sites and applications using the MERN (MongoDB,
            Express, ReactJS, and NodeJS) stack. Since then I have taught myself
            VueJS and plan to learn a lot more. This is not the extent of my
            skills, refer to the technologies section to learn more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
