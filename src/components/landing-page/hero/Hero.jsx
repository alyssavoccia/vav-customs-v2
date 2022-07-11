import VAVLogo from '../../../assets/VAV-Customs-Logo-Hero.png';
import './hero.scss';

function Hero() {
  return (
    <header className='hero' id='home'>
      <img className="hero-logo" src={VAVLogo} alt="Vav Customs Logo" />
    </header>
  )
}

export default Hero;