import NewCustomBuildGrid from '../../../components/admin-dashboard/new-custom-build-grid/NewCustomBuildGrid';
import './customBuilds.scss';

function CustomBuilds() {
  return (
    <div className='custom-builds'>
      <div className='custom-builds__header'>
        <h1>Custom Build Requests</h1>
      </div>
      <div className="dashboard__section">
        <h2 className='dashboard__section-title'>New Custom Build Inquiries</h2>
        <NewCustomBuildGrid />
      </div>
      <div className="dashboard__section">
        <h2 className='dashboard__section-title'>All Custom Build Inquiries</h2>
      </div>
    </div>
  )
}

export default CustomBuilds;