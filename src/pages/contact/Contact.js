import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <section className='contact'>
      <h2 className='contact__title'>Contact</h2>
      <div className='contact__icons-wrapper'>
        <a
          href='mailto:leonardo.nunez123@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <EmailIcon
            className='contact__icon'
            style={{ fill: "black" }}
          />
        </a>
        <a
          href='https://github.com/leonardo-nunez'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon
            className='contact__icon'
            style={{ fill: "black" }}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/leonardo-nunez-del-prado/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon
            className='contact__icon'
            style={{ fill: "black" }}
          />
        </a>
        <a
          href='tel:+46736284123'
          target='_blank'
          rel='noreferrer'
        >
          <PhoneIcon
            className='contact__icon'
            style={{ fill: "black" }}
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
