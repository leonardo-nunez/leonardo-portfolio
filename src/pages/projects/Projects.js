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

import Project from './Project';

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__title-box">
        <h2 className="projects__title">Projects</h2>
      </div>
      <VerticalTimeline lineColor={''}>
        <Project
          background={'dark'}
          icon={<LocalBarIcon />}
          img={cincin}
          url={'https://github.com/leonardo-nunez/cin-cin'}
          title={'CIN CIN'}
          text={'Cocktail recipe app 24 hour project @</SALT>'}
        />
        <Project
          background={'light'}
          demo={true}
          demoLink={'https://quiz-the-survivors.herokuapp.com/'}
          icon={<MusicNoteIcon />}
          img={musically}
          url={'https://github.com/martalewan/Music-quiz'}
          title={'Musically'}
          text={'Music Quiz app, Final project @</SALT>'}
        />
        <Project
          background={'dark'}
          icon={<LaptopIcon />}
          img={portfolio}
          url={'https://github.com/leonardo-nunez/leonardo-portfolio'}
          title={'Portfolio'}
          text={'Portfolio page made with React'}
        />
        <Project
          background={'light'}
          icon={<PetsIcon />}
          img={puppies}
          url={'https://github.com/leonardo-nunez/puppies-fullstack-app'}
          title={'Puppies'}
          text={
            'A fullstack application with server and client displaying puppy information built with typescript'
          }
        />
      </VerticalTimeline>
    </section>
  );
};

export default Projects;
