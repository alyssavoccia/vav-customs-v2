import { useEffect, useState, useContext } from 'react';
import CustomBuildsContext from '../../../context/custom-builds/CustomBuildsContext';
import CustomBuildCard from '../custom-build-card/CustomBuildCard';
import './recentBuildsGrid.scss';

function RecentBuildsGrid() {
  const { builds } = useContext(CustomBuildsContext);
  const [recentBuilds, setRecentBuilds] = useState([]);

  useEffect(() => {
    builds.sort((a, b) => b.timestamp - a.timestamp);
    setRecentBuilds(builds.slice(0, 3));
  }, [builds]);

  return (
    <div className='recent-custom-builds__grid'>
      {recentBuilds.map(build => (
        <CustomBuildCard key={build.name} build={build} />
      ))}
    </div>
  )
}

export default RecentBuildsGrid;