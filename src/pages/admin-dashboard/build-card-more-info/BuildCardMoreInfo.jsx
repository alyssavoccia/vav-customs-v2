import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import CustomBuildsContext from '../../../context/custom-builds/CustomBuildsContext';
import './buildCardMoreInfo.scss';

function BuildCardMoreInfo() {
  const { builds } = useContext(CustomBuildsContext);
  const [loading, setLoading] = useState(true);
  const [build, setBuild] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (builds) {
      const currentName = params.userName.split('-').join(' ');
      const currentBuild = builds.filter(item => item.name === currentName);
      setBuild(currentBuild[0]);
      build && setLoading(false);
    }
  }, [builds, params.userName, build]);

  if (loading) {
    return <p>Loading user info</p>
  }

  return (
    <div className='more-info'>
      <div className='dashboard__header'>
        <h1>{build.name}</h1>
      </div>
      <div className='more-info__button-section'>
        <Link className='btn btn-secondary' to='/admin/custom-builds'>Back to All Builds</Link>
      </div>
      <div className="dashboard__section">
        <div className="more-info__section">
          <div className='more-info__section-images'>
            {build.imgUrls.map((img, i) => (
              <img className='more-info__section-images-img' key={i} src={img} alt='Custom Build Example' />
            ))}
          </div>
          <div className="more-info__section-description">
            <h2>Custom Build Description</h2>
            <p className='more-info__description'>{build.message}</p>
            <h2>Contact Information</h2>
            <p>{build.email}</p>
          </div>
        </div>
      </div>
      <div className="dashboard__section">
        <h2>Build Progress</h2>
        <div className="more-info__section-build-status">
          <h3>Build Status</h3>
        </div>
        <div className="more-info__section-notes">
          <textarea></textarea>
        </div>  
      </div>
    </div>
  )
}

export default BuildCardMoreInfo;