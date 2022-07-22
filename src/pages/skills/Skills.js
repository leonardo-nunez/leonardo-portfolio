const Skills = () => {
  return (
    <>
      <section className="skills">
        <div className="skills__vertical-dots--top" />
        <div className="skills__header-wrapper">
          <article className="skills__header">
            <h1>
              Technical
              <br />
              skills
            </h1>
          </article>
        </div>
        <div className="skills__vertical-dots--middle" />
        <div className="skills__box-wrapper">
          <article className="skills__box skills__box--general">
            <h3>General</h3>
            <p>JavaScript, Typescript</p>
          </article>
          <article className="skills__box skills__box--backend">
            <h3>Backend </h3>
            <p>NodeJS, ExpressJS, REST</p>
          </article>
          <article className="skills__box skills__box--frontend">
            <h3>Frontend</h3>
            <p>
              React, React Native, NextJS, Angular, Redux, HTML, CSS, Figma, UX
            </p>
          </article>
          <article className="skills__box skills__box--tools">
            <h3>Tools and technologies</h3>
            <p>
              Visual Studio Code, Mocha/Jest, Git+GitHub, Cloud Platforms
              (MongoDB Atlas, Netlify, Heroku, Contentful) Asana, TDD, Agile
              work methods
            </p>
          </article>
        </div>
        <div className="skills__vertical-dots--bttm" />
      </section>
    </>
  );
};

export default Skills;
