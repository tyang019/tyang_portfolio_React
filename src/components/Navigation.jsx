import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}