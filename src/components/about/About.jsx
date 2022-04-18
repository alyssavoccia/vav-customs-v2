import './about.scss';
import AboutLogoBoat from '../../assets/about-me2.jpg';
import AboutLogoWorking from '../../assets/about-me.jpg';

function About() {
  return (
    <section className="about-me" id="about">
      <div className="about-me_content container">
        <div className="image-stack">
          <div className="image-stack__item image-stack__item-top">
            <img src={AboutLogoBoat} alt="Me on a boat" />
          </div>
          <div className="image-stack__item image-stack__item-bottom">
            <img className="about-me_img" src={AboutLogoWorking} alt="Working on woodwork" />
          </div>
        </div>
        <div className="about-me_info">
          <h2 className="about-me_title">Hey, I'm Vince</h2>
          <p>"Vince lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
    </section>
  )
}

export default About;