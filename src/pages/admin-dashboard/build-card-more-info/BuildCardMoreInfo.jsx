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
      <div className="dashboard__section">
        <Link to='/admin/custom-builds'>← Back to All Builds</Link>
        <div className="more-info__section">
          <div className='more-info__section-images'>
            {build.imgUrls.map((img, i) => (
              <img className='more-info__section-images-img' key={i} src={img} alt='Custom Build Example' />
            ))}
          </div>
          <div className="more-info__section-description">
            <h2 className='dashboard__section-title'>Custom Build Description</h2>
            <p className='more-info__description'>{build.message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildCardMoreInfo;