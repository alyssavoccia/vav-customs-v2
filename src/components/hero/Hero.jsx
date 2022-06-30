import './hero.scss';
import VAVLogo from '../../assets/VAVCustoms-Logo.png';

function Hero() {
  return (
    <section className='hero' id='home'>
      <img className="hero-logo" src={VAVLogo} alt="Vav Customs Logo" />
    </section>
  )
}

export default Hero;