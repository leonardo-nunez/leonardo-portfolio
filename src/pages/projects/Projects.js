import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Button from 'react-bootstrap/Button';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LaptopIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PetsIcon from '@mui/icons-material/Pets';

import cincin from './images/cincin.jpg';
import musically from './images/musically.jpg';
import portfolio from './images/portfolio.jpg';
import puppies from './images/puppies.jpg';

const Projects = () => {
  const styles = {
    icon: {
      border: '3px solid #f9f9f9',
      background: '#ffc561',
      color: '#f9f9f9',
    },
    element1: {
      background: '#3a5d41',
      border: '8px solid #f9f9f9',
      borderRadius: '16px',
      boxShadow: 'none',
      opacity: '0.8',
    },
    element2: {
      background: '#e9edca',
      border: '8px solid #3a5d41',
      borderRadius: '16px',
      boxShadow: 'none',
      opacity: '0.8',
    },
  };
  return (
    <section className="projects">
      <div className="projects__title-box">
        <h2 className="projects__title">Projects</h2>
      </div>
      <VerticalTimeline lineColor={''}>
        <VerticalTimelineElement
          className="project project__dark"
          contentStyle={styles.element1}
          contentArrowStyle={{ borderRight: '8px solid  #3a5d41' }}
          iconStyle={styles.icon}
          icon={<LocalBarIcon />}
        >
          <div className="project__wrapper">
            <div className="project__text">
              <h3 className="project__title">CIN CIN</h3>
              <p>
                Cocktail recipe app
                <br />
                24 hour project @&lt;/SALT&gt;
              </p>
              <a
                href="https://github.com/leonardo-nunez/cin-cin"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="project__button" variant="success">
                  {<GitHubIcon />} GitHub
                </Button>
              </a>
            </div>
            <img
              className="project__img project__img--1"
              src={cincin}
              alt="proj1Image"
            />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="project project__light"
          contentStyle={styles.element2}
          iconStyle={styles.icon}
          icon={<MusicNoteIcon />}
        >
          <div className="project__wrapper">
            <div className="project__text">
              <h3 className="project__title">Musically</h3>
              <p>
                Music Quiz app
                <br />
                Final project @&lt;/SALT&gt;
              </p>
              <a
                href="https://github.com/martalewan/Music-quiz"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  className="project__button project__button-light"
                  variant="success"
                >
                  {<GitHubIcon />} GitHub
                </Button>
              </a>
              <a
                href="https://quiz-the-survivors.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  className="project__button project__button-light"
                  variant="success"
                >
                  {<LaptopIcon />} Demo
                </Button>
              </a>
            </div>
            <img
              className="project__img project__img-light"
              src={musically}
              alt="proj1Image"
            />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="project project__dark"
          contentStyle={styles.element1}
          contentArrowStyle={{ borderRight: '8px solid  #3a5d41' }}
          iconStyle={styles.icon}
          icon={<LaptopIcon />}
        >
          <div className="project__wrapper">
            <div className="project__text">
              <h3 className="project__title">Portfolio</h3>
              <p>Portfolio page made with React</p>
              <a
                href="https://github.com/leonardo-nunez/leonardo-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="project__button" variant="success">
                  {<GitHubIcon />} GitHub
                </Button>
              </a>
            </div>
            <img
              className="project__img project__img--1"
              src={portfolio}
              alt="proj1Image"
            />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="project project__light"
          contentStyle={styles.element2}
          iconStyle={styles.icon}
          icon={<PetsIcon />}
        >
          <div className="project__wrapper">
            <div className="project__text">
              <h3 className="project__title">Puppies</h3>
              <p>
                A fullstack application with server and client displaying puppy
                information built with typescript
              </p>
              <a
                href="https://github.com/davlet61/puppies-fullstack-app"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  className="project__button project__button-light"
                  variant="success"
                >
                  {<GitHubIcon />} GitHub
                </Button>
              </a>
            </div>
            <img
              className="project__img project__img-light"
              src={puppies}
              alt="proj1Image"
            />
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Projects;
