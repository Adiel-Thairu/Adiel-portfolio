import "./style.css";
// import { fontawesomeicons }
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
  faInstagram,
  
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        I'm always happy to talk,
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:thairuadiel@gmail.com"
          className="footer-link"
        >
          Get in Touch
        </a>
      </p>

      <ul className="footer-list">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Adiel-Thairu"
            className="footer-links"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/adiel-thairu-37a26117b"
            className="footer-links"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://app.netlify.com/teams/adiel-thairu"
            className="footer-links"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/_t.h.a.i.r.u"
            className="footer-links"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
