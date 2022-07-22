import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import LocalBarIcon from '@mui/icons-material/LocalBar';
import LaptopIcon from '@mui/icons-material/Laptop';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PetsIcon from '@mui/icons-material/Pets';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import cincin from './images/cincin.jpg';
import musically from './images/musically.jpg';
import portfolio from './images/portfolio.jpg';
import puppies from './images/puppies.jpg';
import shopping from './images/nextshopping.jpg';

import Project from './Project';

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__title-box">
        <h2 className="projects__title">Projects</h2>
      </div>
      <div className="projects__vertical-dots" />
      <VerticalTimeline lineColor={''}>
        <Project
          background={'dark'}
          demoLink={'https://cin-cin.herokuapp.com/'}
          icon={<LocalBarIcon />}
          img={cincin}
          url={'https://github.com/leonardo-nunez/cin-cin'}
          title={'CIN CIN'}
          text={
            'A simple but good looking cocktail recipe app made during "Hackday", a 24 hour project at </SALT>'
          }
        />
        <Project
          background={'light'}
          demoLink={'https://quiz-the-survivors.herokuapp.com/'}
          icon={<MusicNoteIcon />}
          img={musically}
          url={'https://github.com/martalewan/Music-quiz'}
          title={'Musically'}
          text={'Music Quiz app, Final project @</SALT>'}
        />
        <Project
          background={'dark'}
          demoLink={'https://leonardo-portfolio.herokuapp.com/'}
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
          url={'https://github.com/davlet61/puppies-fullstack-app'}
          title={'Puppies'}
          text={
            'A fullstack application with server and client displaying puppy information built with typescript'
          }
        />
        <Project
          background={'dark'}
          demoLink={'https://next-shopping.herokuapp.com/'}
          icon={<ShoppingCartIcon />}
          img={shopping}
          url={'https://github.com/leonardo-nunez/next-shopping'}
          title={'Next Shopping'}
          text={'A product catalogue app done with NextJS and Scss'}
        />
      </VerticalTimeline>
      <div className="projects__vertical-dots" />
    </section>
  );
};

export default Projects;
