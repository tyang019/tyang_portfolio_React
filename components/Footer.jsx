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
      {socials.map((social, index) => (
        <li key={index}>
          <a href={social.url}>
            <FontAwesomeIcon icon={social.icon}/>
          </a>
        </li>
      ))}
    </footer>
  )
}
export default Footer;