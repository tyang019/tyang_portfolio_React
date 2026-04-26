import tyang from '../assets/LAI_7660.NEF.png'

export default function Intro() {
  return (
    <section className="intro">
      <h1 className="section__title section__title--intro">Hi, I am 
        <strong>Totrtrong Yang</strong>
        <p>Nice to meet you!</p>
      </h1>
      <strong className='section__subtitle--intro'>Frontend Dev</strong>
      <img className='intro__img' src={tyang} alt="Picture of Tortrong's Profile" />
    </section>
  )
}