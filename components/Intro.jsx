export default function Intro() {
  return (
    <section className="intro">
      <h1 className="section__title section__title--intro">Welcome to my portfolio!</h1>
      <p>Front-end dev</p>
      <img src="" alt="Picture of Tortrong's Profile" />

      <section className="my-services">
        <h2 className="section__title">What I do</h2>
        <div className="services">

          <div className="service">
            <h3 className="service__title">Web Development</h3>
            <p className="service__description">I build responsive and user-friendly websites using modern technologies.</p>
          </div>
          <div>
            <h3>Design & Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequatur?</p>
          </div>

          <div>
            <h3>React & Vite</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt laborum deserunt ducimus consectetur, velit eius similique nisi ex quaerat!</p>
          </div>
        </div>
      </section>

    </section>
  )
}