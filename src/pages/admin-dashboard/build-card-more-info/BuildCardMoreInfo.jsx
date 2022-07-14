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
    setBuild(builds.filter(item => item.name === params.userName.split('-').join(' ')));
    setLoading(false);
  }, [builds, params.userName]);

  if (loading) {
    return <p>Loading user info</p>
  }

  return (
    <div className='more-info'>
      <div className='dashboard__header'>
        <h1>{build[0].name}</h1>
      </div>
      <div className="dashboard__section">
        <Link to='/admin/custom-builds'>← Back to All Builds</Link>
      </div>
    </div>
  )
}

export default BuildCardMoreInfo;