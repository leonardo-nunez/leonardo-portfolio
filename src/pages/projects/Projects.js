import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Project from './Project';
import projectContent from './assets/projectsContent.json';

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__title-box">
        <h2 className="projects__title">Projects</h2>
      </div>
      <div className="projects__vertical-dots" />
      <VerticalTimeline lineColor={''}>
        {projectContent.map((p, i) => (
          <Project
            key={i}
            background={i % 2 === 0 ? 'dark' : 'light'}
            demoLink={p.demoLink}
            icon={p.icon}
            img={p.img}
            url={p.url}
            title={p.title}
            text={p.text}
          />
        ))}
      </VerticalTimeline>
      <div className="projects__vertical-dots" />
    </section>
  );
};

export default Projects;
