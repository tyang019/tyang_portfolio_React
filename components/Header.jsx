import tyang from '../assets/tyangPic.jpg'

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={tyang} alt="Tortrong's Profile"/>
          <button className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
          </button>
      </div>
    </header>
  )
}