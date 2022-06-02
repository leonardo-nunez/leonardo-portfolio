import contactBg from '../../images/contact-bg.png';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__icons-wrapper">
        <a
          href="mailto:leonardo.nunez123@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <EmailIcon className="contact__icon" style={{ fill: 'black' }} />
        </a>
        <a
          href="https://github.com/leonardo-nunez"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className="contact__icon" style={{ fill: 'black' }} />
        </a>
        <a
          href="https://www.linkedin.com/in/leonardo-nunez-del-prado/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="contact__icon" style={{ fill: 'black' }} />
        </a>
      </div>
      <img className="contact__bg" src={contactBg} alt="bg" />
    </section>
  );
};

export default Contact;
