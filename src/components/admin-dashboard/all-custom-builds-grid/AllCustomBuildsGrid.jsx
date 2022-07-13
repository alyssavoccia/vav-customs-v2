import { useContext } from 'react';
import CustomBuildsContext from '../../../context/custom-builds/CustomBuildsContext';
import CustomBuildCard from '../custom-build-card/CustomBuildCard';
import './allCustomBuildsGrid.scss';

function AllCustomBuildsGrid() {
  const { builds } = useContext(CustomBuildsContext);

  return (
    <div className="all-custom-builds__grid">
      {builds.map(build => (
        <CustomBuildCard key={build.name} build={build} seen={build.seen} className='all-custom-builds__grid-card' />
      ))}
    </div>
  )
}

export default AllCustomBuildsGrid;