import { Link } from 'react-router-dom';
import './customBuildCard.scss';

function CustomBuildCard({ build }) {
  return (
    <div key={build.name} className='custom-build-card'>
      <p className='custom-build-card__name'>{build.name}</p>
      <div className='custom-build-card__body'>
        <p>{build.message.slice(0, 75)}...</p>
        <div className='custom-build-card__body-img'>
          {build.imgUrls && <img src={build.imgUrls[0]} alt='Custom build example' />}
          {build.imgUrls.length > 1 && <span className='custom-build-card__body-img-num'>2</span>}
        </div>
      </div>
      <div className='custom-build-card__footer'>
        <p>Requested: {new Date(build.timestamp.seconds * 1000).toLocaleDateString('en-US')}</p>
        <Link className='custom-build-card__footer-link' to={`/admin/custom-build/${build.name}`}>View More</Link>
      </div>
    </div>
  )
}

export default CustomBuildCard;