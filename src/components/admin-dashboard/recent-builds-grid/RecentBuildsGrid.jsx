import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import { toast } from 'react-toastify';
import './recentBuildsGrid.scss';

function RecentBuildsGrid() {
  const [customBuilds, setCustomBuilds] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomBuilds = async () => {
      try {
        // Get reference
        const customBuildsRef = collection(db, 'customBuilds');

        const q = query(
          customBuildsRef,
          orderBy('timestamp', 'desc'),
          limit(3)
        );

        const querySnap = await getDocs(q);

        const recentBuilds = [];

        querySnap.forEach((doc) => {
          recentBuilds.push(doc.data());
        });

        setCustomBuilds(recentBuilds);
        setLoading(false);
      } catch (error) {
        toast.error('Could not fetch recent builds');
      }
    };

    fetchCustomBuilds();
  }, []);

  if (loading) {
    return <p>Fetching recent requests!</p>
  }

  return (
    <div className='recent-custom-builds__grid'>
      {customBuilds.map(build => (
        <div key={build.name} className='recent-custom-builds__grid-card'>
          <p className='recent-custom-builds__grid-card-name'>{build.name}</p>
          <div className='recent-custom-builds__grid-card-body'>
            <p>{build.message.slice(0, 75)}...</p>
            <div className='recent-custom-builds__grid-card-body-img'>
              {build.imgUrls && <img src={build.imgUrls[0]} alt='Custom build example' />}
              {build.imgUrls.length > 1 && <span className='recent-custom-builds__grid-card-body-img-num'>2</span>}
            </div>
          </div>
          <p className='recent-custom-builds__grid-card-footer'>Requested on: {new Date(build.timestamp.seconds * 1000).toLocaleDateString('en-US')}</p>
        </div>
      ))}
    </div>
  )
}

export default RecentBuildsGrid