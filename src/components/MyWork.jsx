import { Link } from "react-router-dom";
import littleLemon from "../assets/Homepage.png";
import mangataGallo from "../assets/mangataHomepage.png"

export default function MyWork () {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">A range of my work</p>

      <div className="portfolio">
        <Link className="portfolio__item">
          <img className="portfolio__img" src={littleLemon} alt="little lemon homepage" />
        </Link>
        <Link className="portfolio__item">
          <img className="portfolio__img" src={mangataGallo} alt="mangata gallo homepage" />
        </Link>
      </div>
    </section>
  )
}