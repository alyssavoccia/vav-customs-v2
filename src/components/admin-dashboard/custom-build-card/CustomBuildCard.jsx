import { Link } from 'react-router-dom';
import './customBuildCard.scss';

function CustomBuildCard({ build, status }) {
  const userName = build.name.split(' ').join('-');

  return (
    <>
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
          <Link className='custom-build-card__footer-link' to={`/admin/custom-build/${userName}`}>View More</Link>
        </div>
        {status && status !== 'Not Viewed' && <span className={`custom-build-card__tag ${status === 'In Progress' && 'custom-build-card__tag-in-progress'} ${status === 'Completed' && 'custom-build-card__tag-completed'}`}>{status}</span>}
      </div>
    </>
  )
}

export default CustomBuildCard;