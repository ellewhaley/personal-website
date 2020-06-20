import React from 'react';
import LinkedIcon from '../images/linkedin.svg';
import GitIcon from '../images/github.svg';
import TwitterIcon from '../images/twitter.svg';

const Footer = () => {
  return (
    <div className="footer">
      <a className="footer__link" href="https://www.linkedin.com/notifications/">
        <img className="footer__link-icon" src={ LinkedIcon } alt="Linkedin Icon" />
      </a>
      <a className="footer__link" href="https://github.com/ellewhaley">
        <img className="footer__link-icon" src={ GitIcon } alt="Github Icon" />
      </a>
      <a className="footer__link" href="https://twitter.com/ElleWhaley">
        <img className="footer__link-icon" src={ TwitterIcon } alt="Twitter Icon" />
      </a>
    </div>
  );
}

export default Footer;