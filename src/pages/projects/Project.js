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
      icon={props.icon}
    >
      <div className="project__wrapper">
        <div className="project__text">
          <h3 className="project__title">{props.title}</h3>
          <p>{props.text}</p>
          <a href={props.url} target="_blank" rel="noreferrer">
            <Button className="project__button" variant="success">
              {<GitHubIcon />} GitHub
            </Button>
          </a>
          {props.demo && (
            <a href={props.demoLink} target="_blank" rel="noreferrer">
              <Button
                className="project__button project__button-light"
                variant="success"
              >
                {<LaptopIcon />} Demo
              </Button>
            </a>
          )}
        </div>
        <img className={'project__img'} src={props.img} alt="projImage" />
      </div>
    </VerticalTimelineElement>
  );
};

export default Project;
