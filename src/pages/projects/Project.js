import React from 'react';
import Button from 'react-bootstrap/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const Project = ({ background, demoLink, icon, img, url, title, text }) => {
  const styles = {
    icon: {
      border: '3px solid #f9f9f9',
      background: '#ffc561',
      color: '#f9f9f9',
    },
    dark: {
      background: 'rgba(58, 93, 65, 0.7)',
      border: '8px solid #f9f9f9',
      borderRadius: '16px',
      boxShadow: 'none',
    },
    light: {
      background: 'rgba(233, 237, 202, 0.7)',
      border: '8px solid #3a5d41',
      borderRadius: '16px',
      boxShadow: 'none',
    },
  };
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
      icon={<span class="material-symbols-outlined">{icon}</span>}
    >
      <div className="project__wrapper">
        <div className="project__text">
          <h3 className="project__title">{title}</h3>
          <p>{text}</p>
          <div className="project__buttons-wrapper">
            <a href={url} target="_blank" rel="noreferrer">
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
                  <span class="material-symbols-outlined">laptop_mac</span>
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
