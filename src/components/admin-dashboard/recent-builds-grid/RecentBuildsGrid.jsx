import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import { toast } from 'react-toastify';
import CustomBuildCard from '../custom-build-card/CustomBuildCard';
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
        <CustomBuildCard build={build} />
      ))}
    </div>
  )
}

export default RecentBuildsGrid