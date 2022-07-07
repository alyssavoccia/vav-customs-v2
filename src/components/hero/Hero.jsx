import './hero.scss';
import VAVLogo from '../../assets/VAV-Customs-Logo-Hero.png';

function Hero() {
  return (
    <header className='hero' id='home'>
      <img className="hero-logo" src={VAVLogo} alt="Vav Customs Logo" />
    </header>
  )
}

export default Hero;