import React from 'react';
import EmailIcon from '../images/mail1.svg';
import LinkedIcon from '../images/linkedin.svg';
import GitIcon from '../images/github.svg';

const Main = () => {
  return (
    <div className="main" id="content">
      <div className="opacity">
        <div className="main__container" id="about">
          <h2 className="main__container__title">About</h2>
          <p className="main__container__subtitle">Frontend Developer <span>|</span> Animal Lover <span>|</span> Avid Foodie</p>
          <p className="main__container__text">
            Hey, I'm Elle and I'm a Frontend Engineer based in London. In my spare time (if I'm not coding) I'm a Creative Writer for <a className="main__container__text-link" href="https://www.nonchalantmagazine.com/">Nonchalant Magazine.</a>
          </p>
          <p className="main__container__text">
            I recently opted for a career change into Software Engineering after working as a Technical recruiter. 
            Realising that perhaps my skills could be put to better use in the roles that she was hiring for as opposed to the role of recruiter. 
            Therefore, I decided to enrole myself in a Software Engineering Immersive course at General Assembly.
          </p>
          <p className="main__container__text">
            I now have over years worth of experience working as a Frontend Engineer; Working with Front-end Frameworks, particularly React. Collaborating with other developers, designers and QA’s to build fully responsive web applications. 
          </p>
        </div>
        {/* <div className="main__container" id="skills">
          <h2 className="main__container__title">Skills</h2>
        </div> */}
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
        <div className="main__container" id="work">
          <h2 className="main__container__title">Work</h2>
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
          <div className="main__container-item">
            <img className="main__container-item__icon" src={ LinkedIcon } alt="Email Icon" />
            <p className="main__container-item__text">linkedin.com/in/elle-whaley</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;