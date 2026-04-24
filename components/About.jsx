import aboutMe from "../assets/about-me.JPG";

export default function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">Developer based out of Redding</p>
      <div className="about-me__body">
        <p>I am a frontend-focused developer with a bachelor degree in Computer Science building responsive, user-friendly web applications using React, JavaScript, HTML, and CSS. I focus on writing clean, maintainable code and creating smooth user experiences through component-based design and modern web development practices.</p>
        <p>I turn ideas and designs into functional applications and continuously improve my skills through hands-on projects. I enjoy learning new technologies, and building projects that are both practical and visually engaging.</p>
        <img className="about-me__img" src={aboutMe} alt="" />
      </div>
      <div className="about-me__position">
       
      </div>
    </section>
  )
}