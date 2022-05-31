import React from 'react';

import birdSilouette from '../../images/bird-silhouette.png';

const Skills = () => {
  return (
    <>
      <section className="skills">
        <div className="skills__vertical-dots" />
        <div className="skills__content-wrapper">
          <article className="skills__header">
            <h1>
              Technical
              <br />
              skills
            </h1>
          </article>
          <article className="skills__content">
            <div className="column">
              <h3>General</h3>
              <p>
                JavaScript
                <br />
                Typescript
              </p>
              <h3>Backend </h3>
              <p>
                NodeJS
                <br />
                ExpressJS
                <br />
                REST
              </p>{' '}
              <h3>Frontend</h3>
              <p>
                React
                <br />
                Angular
                <br />
                Redux
                <br />
                HTML
                <br />
                CSS
                <br />
                Figma
                <br />
                UX
              </p>
            </div>
            <div className="column">
              <h3>Tools and technologies</h3>
              <p>
                Visual Studio Code
                <br /> Mocha/Jest
                <br />
                Git+GitHub
                <br /> Cloud Platforms
                <br />
                (MongoDB Atlas, Netlify,
                <br />
                Heroku, Contentful)
                <br />
                Asana
                <br />
                TDD
                <br /> Agile work methods
              </p>
            </div>
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
