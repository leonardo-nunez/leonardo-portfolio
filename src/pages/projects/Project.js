import React from 'react';
import Button from 'react-bootstrap/Button';
import LaptopIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const Project = (props) => {
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
      className={`project project__${props.background}`}
      contentStyle={props.background === 'dark' ? styles.dark : styles.light}
      contentArrowStyle={
        props.background === 'dark'
          ? { borderRight: '8px solid  #f9f9f9' }
          : { borderRight: '8px solid  #3a5d41' }
      }
      iconStyle={styles.icon}
      icon={<span class="material-symbols-outlined">{props.icon}</span>}
    >
      <div className="project__wrapper">
        <div className="project__text">
          <h3 className="project__title">{props.title}</h3>
          <p>{props.text}</p>
          <div className="project__buttons-wrapper">
            <a href={props.url} target="_blank" rel="noreferrer">
              <Button
                className={
                  props.background === 'light'
                    ? 'project__button project__button-light project__button--github'
                    : 'project__button'
                }
                variant="success"
              >
                {<GitHubIcon />} GitHub
              </Button>
            </a>
            {props.demoLink && (
              <a
                className="project__link"
                href={props.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  className={
                    props.background === 'light'
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
        <img
          className="project__img"
          src={`/project_images/${props.img}`}
          alt="projImage"
        />
      </div>
    </VerticalTimelineElement>
  );
};

export default Project;
