import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faGit,
  faPython,
  faWordpressSimple,
  faBootstrap,
  faAngular,
  faNpm,
  faJava,
  faDev,
  
} from "@fortawesome/free-brands-svg-icons";

const SkillSet = () => {
  return (
    <div className="skillSlider">
      <div className="skillSlide">
        <h3 className="skill-heading">HTML</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/HTML5"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">CSS</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/CSS#CSS_3"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faCss3} className="skill-icon" />
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">SASS</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faSass} className="skill-icon" />
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">Javascript</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Javascript"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faJs} className="skill-icon" />
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">React</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faReact} className="skill-icon" />
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">GIT</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Git"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faGit} className="skill-icon" />
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">NestJs</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://nestjs.com/"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faNpm} className="skill-icon" />
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">AngularJs</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://angularjs.com/"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faAngular} className="skill-icon" />
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">BootStrap</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://angularjs.com/"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faBootstrap} className="skill-icon" />
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">Wordpress</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wordpress.com/"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faWordpressSimple} className="skill-icon" />
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">Typescript</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.typescriptlang.org/"
          className="skill-links"
          s
        >
          <FontAwesomeIcon icon={faJs} className="skill-icon" />
          {/* <img src="/img/TYPESCRIPT.png" className="skill-icon" /> */}
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">Tailwind CSS</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://tailwindcss.com/"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faCss3} className="skill-icon" />
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">Python</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://python.com/"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faPython} className="skill-icon" />
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">C++</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://python.com/"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faDev} className="skill-icon" />
        </a>
      </div>
      <div className="skillSlide">
        <h3 className="skill-heading">Java</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://python.com/"
          className="skill-links"
        >
          <FontAwesomeIcon icon={faJava} className="skill-icon" />
        </a>
      </div>
      
    </div>
  );
};

export default SkillSet;
