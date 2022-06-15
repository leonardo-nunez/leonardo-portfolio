import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const onClickHandler = (e) => {
    e.preventDefault();
    setNavActive((active) => !active);
  };

  return (
    <div className="screen">
      <div className={`${navActive ? 'nav--active' : ''}`}>
        <div className="nav__trigger" onClick={onClickHandler}>
          <span className="nav__icon" />
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <Link to="intro">
              <li className="nav__item" onClick={onClickHandler}>
                HOME
              </li>
            </Link>
            <Link to="about" offset={-145}>
              <li className="nav__item" onClick={onClickHandler}>
                ABOUT
              </li>
            </Link>
            <Link to="skills" offset={80}>
              <li className="nav__item" onClick={onClickHandler}>
                SKILLS
              </li>
            </Link>
            <Link to="projects" offset={-110}>
              <li className="nav__item" onClick={onClickHandler}>
                PROJECTS
              </li>
            </Link>
            <Link to="contact">
              <li className="nav__item" onClick={onClickHandler}>
                CONTACT
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
