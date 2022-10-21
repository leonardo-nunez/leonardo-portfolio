import React from 'react';
import Button from 'react-bootstrap/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styles from './assets/VerticalTimelineStyles';

const Project = ({ background, demoLink, icon, img, url, title, text }) => {
  return (
    <VerticalTimelineElement
      className={`project project__${background}`}
      contentStyle={background === 'dark' ? styles.dark : styles.light}
      contentArrowStyle={
        background === 'dark'
          ? { borderRight: '8px solid  #f9f9f9' }
          : { borderRight: '8px solid  #3a5d41' }
      }
      iconStyle={styles.icon}
      icon={<span className="material-symbols-outlined">{icon}</span>}
    >
      <div className="project__wrapper">
        <div className="project__text">
          <h3 className="project__title">{title}</h3>
          <p>{text}</p>
          <div className="project__buttons-wrapper">
            <a
              className="project__link"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className={
                  background === 'light'
                    ? 'project__button project__button-light project__button--github'
                    : 'project__button'
                }
                variant="success"
              >
                {<GitHubIcon />} GitHub
              </Button>
            </a>
            &nbsp;
            {demoLink && (
              <a
                className="project__link"
                href={demoLink}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  className={
                    background === 'light'
                      ? 'project__button project__button-demo project__button-light'
                      : 'project__button project__button-demo'
                  }
                  variant="success"
                >
                  <span className="material-symbols-outlined">laptop_mac</span>
                  &nbsp;Demo
                </Button>
              </a>
            )}
          </div>
        </div>
        <a href={demoLink ? demoLink : url} target="_blank" rel="noreferrer">
          <button className="project__img-btn">
            <img
              className="project__img"
              src={`/project_images/${img}`}
              alt="projImage"
            />
          </button>
        </a>
      </div>
    </VerticalTimelineElement>
  );
};

export default Project;
