import { useContext, useEffect, useState } from 'react';
import CustomBuildsContext from '../../../context/custom-builds/CustomBuildsContext';
import CustomBuildCard from '../custom-build-card/CustomBuildCard';
import './allCustomBuildsGrid.scss';

function AllCustomBuildsGrid() {
  const { builds } = useContext(CustomBuildsContext);
  const [customBuilds, setCustomBuilds] = useState([]);

  useEffect(() => {
    setCustomBuilds(builds.sort((a, b) => b.timestamp - a.timestamp));
  }, [builds]);

  return (
    <div className="all-custom-builds__grid">
      {customBuilds.map(build => (
        <CustomBuildCard key={build.name} build={build} status={build.status} className='all-custom-builds__grid-card' />
      ))}
    </div>
  )
}

export default AllCustomBuildsGrid;