import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"; 

const socials = [
  {
      icon: faEnvelope,
      url: "mailto:hello@example.com",
    },
    {
      icon: faGithub,
      url: "https://github.com",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com",
    },
    {
      icon: faMedium,
      url: "https://medium.com",
    },
    {
      icon: faStackOverflow,
      url: "https://stackoverflow.com",
    },
]

const Footer = () => {
  return (
    <footer>
      <ul className="social-list">
        {socials.map((social, index) => (
        <li className="social-list__item" key={index}>
          <a className="social-list__link" href={social.url}>
            <FontAwesomeIcon icon={social.icon}/>
          </a>
        </li>
      ))}
      </ul>
    </footer>
  )
}
export default Footer;