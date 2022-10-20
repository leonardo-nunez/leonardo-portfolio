import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import cincin from './images/cincin.jpg';
import musically from './images/musically.jpg';
import portfolio from './images/portfolio.jpg';
import puppies from './images/puppies.jpg';
import shopping from './images/nextshopping.jpg';
import chatUpNow from './images/ChatUpNow.png';

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
          // demoLink={'https://cin-cin.herokuapp.com/'}
          icon="local_bar"
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
          icon="music_note"
          img={musically}
          url={'https://github.com/martalewan/Music-quiz'}
          title={'Musically'}
          text={'Music Quiz app, Final project @</SALT>'}
        />
        <Project
          background={'dark'}
          demoLink={'https://fullstack-chat-leo.herokuapp.com/'}
          icon="sms"
          img={chatUpNow}
          url={'https://github.com/leonardo-nunez/fullstack-chat-leo'}
          title={'ChatUpNow'}
          text={'A fullstack chat app'}
        />
        <Project
          background={'light'}
          demoLink={'https://leonardo-portfolio.herokuapp.com/'}
          icon="laptop_mac"
          img={portfolio}
          url={'https://github.com/leonardo-nunez/leonardo-portfolio'}
          title={'Portfolio'}
          text={'Portfolio page made with React'}
        />
        <Project
          background={'dark'}
          icon="pets"
          img={puppies}
          url={'https://github.com/davlet61/puppies-fullstack-app'}
          title={'Puppies'}
          text={
            'A fullstack application with server and client displaying puppy information built with typescript'
          }
        />
        <Project
          background={'light'}
          demoLink={'https://next-shopping.herokuapp.com/'}
          icon="shopping_cart"
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
