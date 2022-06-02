import React from 'react';

import birdSilouette from '../../images/bird-silhouette.png';

const Skills = () => {
  return (
    <>
      <section className="skills">
        <div className="skills__header-wrapper">
          <article className="skills__header">
            <h1>
              Technical
              <br />
              skills
            </h1>
          </article>
        </div>
        <div className="skills__vertical-dots" />
        <div className="skills__box-wrapper">
          <article className="skills__box">
            <h3>General</h3>
            <p>JavaScript, Typescript</p>
          </article>
          <article className="skills__box">
            <h3>Backend </h3>
            <p>NodeJS, ExpressJS, REST</p>
          </article>
          <article className="skills__box">
            <h3>Frontend</h3>
            <p>React, Angular, Redux, HTML, CSS, Figma, UX</p>
          </article>
          <article className="skills__box">
            <h3>Tools and technologies</h3>
            <p>
              Visual Studio Code, Mocha/Jest, Git+GitHub, Cloud Platforms
              (MongoDB Atlas, Netlify, Heroku, Contentful) Asana, TDD, Agile
              work methods
            </p>
          </article>
        </div>
        <img
          className="skills__birds"
          src={birdSilouette}
          alt="background_image"
        />
      </section>
    </>
  );
};

export default Skills;