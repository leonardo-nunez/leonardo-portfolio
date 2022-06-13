import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <Link to="intro">
          <li className="nav__li">HOME</li>
        </Link>
        <Link to="about" offset={-145}>
          <li className="nav__li">ABOUT</li>
        </Link>
        <Link to="skills" offset={80}>
          <li className="nav__li">SKILLS</li>
        </Link>
        <Link to="projects" offset={-110}>
          <li className="nav__li">PROJECTS</li>
        </Link>
        <Link to="contact">
          <li className="nav__li">CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
