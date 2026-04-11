export default function Services() {
  return (
    <section className="my-services">
        <h2 className="section__title">What I do</h2>

        <div className="services">
          <div className="service">
            <h3 className="service__title">Web Development</h3>
            <p className="service__description">I build responsive and user-friendly websites using modern technologies.</p>
          </div>
          <div className="service">
            <h3 className="service__title">Design & Development</h3>
            <p className="service__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequatur?</p>
          </div>
          <div className="service">
            <h3 className="service__title">React & Vite</h3>
            <p className="service__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt laborum deserunt ducimus consectetur, velit eius similique nisi ex quaerat!</p>
          </div>
        </div>
        
        <button className="btn">See my work</button>
      </section>
  )
}