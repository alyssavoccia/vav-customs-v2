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
        <form>
          <div className="more-info__section-build-status">
            <label>Build Status</label>
            <div className="more-info__section-build-status__form-buttons">
              <button 
                type='button'
                className={build.status === 'Not Viewed' ? 'form-button form-button-active' : 'form-button'}
              >
                Not Viewed
              </button>
              <button 
                type='button'
                className={build.status === 'Viewed' ? 'form-button form-button-active' : 'form-button'}
              >
                Viewed
              </button>
              <button 
                type='button'
                className={build.status === 'In Progress' ? 'form-button form-button-active' : 'form-button'}
              >
                In Progress
              </button>
              <button 
                type='button'
                className={build.status === 'Completed' ? 'form-button form-button-active' : 'form-button'}
              >
                Completed
              </button>
            </div>
          </div>
          <div className="more-info__section-notes">
            <label>Build Notes</label>
            <textarea value={build.notes}></textarea>
          </div>
          <button className='btn more-info__section-btn' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default BuildCardMoreInfo;