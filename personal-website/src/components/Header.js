import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../images/logo.png';

const Header = () => {
  return (
    <div className="header">
      <img src={ Logo } alt="Logo" className="header__logo" />
      <div className="header__nav">
        <AnchorLink className="header__nav-item" href="#about">About</AnchorLink>
        <AnchorLink className="header__nav-item" href="#experience">Experience</AnchorLink>
        <AnchorLink className="header__nav-item" href="#work">Projects</AnchorLink>
        <AnchorLink className="header__nav-item" href="#contact">Contact</AnchorLink>
      </div>
    </div>
  );
}

export default Header;
