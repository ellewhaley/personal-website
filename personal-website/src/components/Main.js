import React from 'react';
import EmailIcon from '../images/mail1.svg';
import LinkedIcon from '../images/linkedin.svg';
import GitIcon from '../images/github.svg';
import Bynd from '../images/bynd.png';
import Game from '../images/game.png';
import Reed from '../images/reed.png';
import InbetweenUs from '../images/inbetweenus.png';

const Main = () => {
  return (
    <div className="main" id="content">
      <div className="opacity">
        <div className="main__container" id="about">
          <h2 className="main__container__title">About</h2>
          <p className="main__container__subtitle">Frontend Developer <span>|</span> Animal Lover <span>|</span> Avid Foodie</p>
          <p className="main__container__text">
            Hey, I'm Elle and I'm a Frontend Engineer based in London. In my spare time (if I'm not coding), I'm a Creative Writer for <a className="main__container__text-link"  rel="noopener noreferrer" target="_blank" href="https://www.nonchalantmagazine.com/">Nonchalant Magazine.</a>
          </p>
          <p className="main__container__text">
            I recently opted for a career change into Software Engineering after working as a Technical Recruiter. 
            Realising that perhaps my skills could be put to better use in the roles that a was hiring for as opposed to the role of recruiter. 
            Therefore, I decided to enrol myself in a Software Engineering Immersive course at General Assembly.
          </p>
          <p className="main__container__text">
            I now have over years worth of experience as a Frontend Engineer; working with Front-end Frameworks, particularly React. Collaborating with other developers, designers and QA’s to build fully responsive web applications. 
          </p>
        </div>
        <div className="main__container" id="experience">
          <h2 className="main__container__title">Experience</h2>
          <p className="main__container__subtitle">
            Frontend Engineer <span>|</span> Beyond, London <span>|</span> July 2019 to Current
          </p>
          <p className="main__container__text-extra">
            Whilst working at Beyond I have worked on a range of projects, collaborating with other developers, designers and QA’s to build fully responsive web applications.<br />
            Skills included: JavaScript, React, Redux, Angular 2+.<br />
            Projects include: Bynd.com, REED.com, Be the Business, Google Hangouts.
          </p>
          <p className="main__container__subtitle">
            Software Engineering Immersive <span>|</span> General Assembly, London <span>|</span> March 2019 to June 2019
          </p>
          <p className="main__container__text">
            During the 12 week Immersive course at General Assembly, we were trained in building Full stack web applications. 
            HTML, CSS, SCSS, Bulma, React, Node.js, Express, Python and MongoDB.
          </p>
        </div>
        <div className="main__container" id="projects">
          <h2 className="main__container__title">Projects</h2>
          <div className="main__container-project">
            <img className="main__container-project__image" src={ Reed } alt="Screenshot of Reed.com homepage" />
            <div>
              <a className="main__container-project__subtitle" href="https://www.reed.com/">Reed.com</a>
              <p className="main__container-project__text">
                SCSS <span>|</span> React <span>|</span> Redux <span>|</span> Contentful <br />
                Reed wanted to re-vamp their Reed.com website in order to provide people with a better understanding of the companies services. I was assigned to the this project from start to finish and I worked alongside one of the senior developers and a team of designers to complete the website in time for Reeds 50th Birthday.
              </p>
            </div>
          </div>
          <div className="main__container-project">
            <img className="main__container-project__image" src={ Bynd } alt="Screenshot of Reed.com homepage" />
            <div>
              <a className="main__container-project__subtitle" href="https://www.bynd.com/">Bynd.com</a>
              <p className="main__container-project__text">
                SCSS <span>|</span> React <span>|</span> Redux <span>|</span> Prismic <br />
                Beyond were undergoing a rebrand just as I joined the company. This was the first project website I worked on from start to finish. This was a 3 month project where I was the main Frontend Engineer for the duration of the project. 
              </p>
            </div>
          </div>
          <div className="main__container-project">
            <img className="main__container-project__image" src={ InbetweenUs } alt="Screenshot of Reed.com homepage" />
            <div>
              <a className="main__container-project__subtitle" href="https://inbetween-us.herokuapp.com/#/">InbetweenUs</a>
              <p className="main__container-project__text">
                HTML <span>|</span> CSS <span>|</span> React <span>|</span> Python <br />
                Full-Stack Web Application to help people in London who are often looking to meet friends of theirs who live on the other side of London to themselves. The app drew on third party APIs: Mapbox and Google.
              </p>
            </div>
          </div>
          <div className="main__container-project">
            <img className="main__container-project__image" src={ Game } alt="Screenshot of Reed.com homepage" />
            <div>
              <a className="main__container-project__subtitle" href="https://ellewhaley.github.io/SEI-Project-01/">Space Invaders</a>
              <p className="main__container-project__text">
                HTML <span>|</span> CSS <span>|</span> JavaScript.<br />
                Space Invaders was the first Web Application I built at General Assembly.
              </p>
            </div>
          </div>
        </div>
        <div className="main__container" id="contact">
          <h2 className="main__container__title">Contact</h2>
          <div className="main__container-item">
            <img className="main__container-item__icon" src={ EmailIcon } alt="Email Icon" />
            <p className="main__container-item__text">elliewhaley11@gmail.com</p>
          </div>
          <div className="main__container-item">
            <img className="main__container-item__icon" src={ GitIcon } alt="Email Icon" />
            <p className="main__container-item__text">github.com/ellewhaley</p>
          </div>
          <a className="main__container-item" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/notifications/">
            <img className="main__container-item__icon" src={ LinkedIcon } alt="Email Icon" />
            <p className="main__container-item__text">linkedin.com/in/elle-whaley</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;