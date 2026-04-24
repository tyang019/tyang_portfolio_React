export default function Services() {
  return (
    <section className="my-services">
        <h2 className="section__title">What I do</h2>

        <div className="services">
          <div className="service">
            <h3 className="service__title">Web Development</h3>
            <p className="service__description">Using modern frontend technologies like React, JavaScript, HTML, and CSS.</p>
          </div>
          <div className="service">
            <h3 className="service__title">Design & Development</h3>
            <p className="service__description">Translate UI/UX designs into functional and responsive web interfaces.</p>
          </div>
          <div className="service">
            <h3 className="service__title">React & Vite</h3>
            <p className="service__description">Develop dynamic single-page applications, leveraging hooks, state management, and reusable components.</p>
          </div>
        </div>
        
        <button className="btn">See my work</button>
      </section>
  )
}