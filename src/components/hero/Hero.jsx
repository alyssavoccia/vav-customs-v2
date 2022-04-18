import './hero.scss';
import VAVLogo from '../../assets/VAV-Customs-Logo.png';

function Hero() {
  return (
    <section className='hero'>
      <img className="hero-logo" src={VAVLogo} alt="Vav Customs Logo" />
    </section>
  )
}

export default Hero;