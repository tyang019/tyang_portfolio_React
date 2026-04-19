import aboutMe from "../assets/about-me.JPG";

export default function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">Developer based out of Redding</p>
      <div className="about-me__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dolorum provident consequatur soluta officia consequuntur incidunt, quis ad sapiente accusantium amet inventore molestias neque deserunt. Necessitatibus fuga repellendus praesentium facilis, rerum dolore et accusamus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate illum doloribus iure! Dolorum, consequuntur sint quod soluta doloremque dolorem cupiditate similique commodi vitae nihil, vel quam cum tenetur aut ex repudiandae officia laudantium.</p>
        <img className="about-me__img" src={aboutMe} alt="" />
      </div>
      <div className="about-me__position">
       
      </div>
    </section>
  )
}