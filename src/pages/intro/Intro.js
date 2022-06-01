import React from 'react';
import leoPortrait from './images/leo-portrait.jpg';
import tropicalLeaf from '../../images/tropical-leaf-silhouette.png';

const Intro = () => {
  return (
    <>
      <img
        className="intro__tropical--left"
        src={tropicalLeaf}
        alt="background_image"
      />
      <img
        className="intro__tropical--right"
        src={tropicalLeaf}
        alt="background_image"
      />
      <section className="intro">
        <div className="intro__wrapper">
          <article className="intro__text">
            <h1>
              Hello I'm <span className="highlighted">Leonardo Nunez</span>
            </h1>
            <h3>a full-stack web developer</h3>
          </article>
          <img className="intro__image" src={leoPortrait} alt="leo-portrait" />
        </div>
        <div className="vertical-dots" />
      </section>
    </>
  );
};

export default Intro;
