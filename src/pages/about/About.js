import CATS from './images/CATS.jpg';
import Circus from './images/Circus.jpg';

const About = () => {
  return (
    <section className='about'>
      <article className='about__wrapper'>
        <h2 className='about__title'>About</h2>
        <article className='about__content'>
          <div className='about__text'>
            <div>
              I'm a full-stack web developer, video editor and show performer.
              <br />
              <br />
              In 2021 I decided to make a switch from the stage into coding. I
              applied to
              <span className='highlighted'> &lt;/SALT&gt;</span> and was one of
              the 40 candidates that got in from over 1000 applicants.
              <br />
              <br />I love problem solving, being creative and working in teams.
              <br />
              I speak English, Swedish and Spanish fluently.
              <br />
              <br />
              My full CV can be found{' '}
              <a
                className='about__cv-link'
                href='https://docs.google.com/document/d/1z45C-9wZqsu9XmbkVCq7ATprNzkf9Og7IZH2mR-5ouY/edit?usp=sharing'
              >
                here
              </a>
              .
            </div>
          </div>
          <figure className='about__image-wrapper'>
            <img
              className='about__images about__images--cats'
              src={CATS}
              alt='CATS'
            />
            <img
              className='about__images about__images--circus'
              src={Circus}
              alt='Circus'
            />
          </figure>
        </article>
      </article>
      {/* <div className="about__vertical-dots" /> */}
    </section>
  );
};

export default About;
