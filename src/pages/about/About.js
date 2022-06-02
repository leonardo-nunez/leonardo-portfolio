import React from 'react';

import CATS from './images/CATS.jpg';
import Circus from './images/Circus.jpg';
import fern from '../../images/fern.png';
import birdSilouette from '../../images/bird-silhouette.png';

const About = () => {
  return (
    <section className="about">
      <img className="about__bird" src={birdSilouette} alt="background_image" />
      <img className="about__fern" src={fern} alt="background_image" />
      <article className="about__wrapper">
        <h2 className="about__title">About</h2>
        <article className="about__content">
          <p className="about__text">
            Full-stack web developer, video editor and show performer. <br />
            In 2021 I decided to make a switch from the stage into coding. I
            applied to
            <span className="highlighted"> &lt;/SALT&gt;</span> and was one of
            the 40 candidates that got in from over 1000 applicants.
            <br />I love problem solving, being creative and working in teams.
          </p>
          <figure className="about__image-wrapper">
            <img
              className="about__images about__images--cats"
              src={CATS}
              alt="CATS"
            />
            <img
              className="about__images about__images--circus"
              src={Circus}
              alt="Circus"
            />
          </figure>
        </article>
      </article>
      {/* <div className="about__vertical-dots" /> */}
    </section>
  );
};

export default About;
