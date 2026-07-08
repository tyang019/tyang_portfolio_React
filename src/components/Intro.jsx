import aboutMe from "../assets/about-me.JPG";

export default function Intro() {
  return (
    <section className="intro">
      <h1 className="section__title section__title--intro">Hi, I am 
        <strong>Tortrong Yang</strong>
        <p>Nice to meet you!</p>
      </h1>
      <strong className='section__subtitle--intro'>Frontend Developer</strong>
      <img className='intro__img' src={aboutMe} alt="Picture of Tortrong's Profile" />
    </section>
  )
}