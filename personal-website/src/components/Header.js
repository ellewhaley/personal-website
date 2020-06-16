import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__logo">EW</h1>
      <div className="header__nav">
        <AnchorLink className="header__nav-item" href="#about">About</AnchorLink>
        <AnchorLink className="header__nav-item" href="#portfolio">Portfolio</AnchorLink>
        <AnchorLink className="header__nav-item" href="#contact">Contact</AnchorLink>
      </div>
    </div>
  );
}

export default Header;
