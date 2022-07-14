import NewCustomBuildsGrid from '../../../components/admin-dashboard/new-custom-builds-grid/NewCustomBuildsGrid';
import AllCustomBuildsGrid from '../../../components/admin-dashboard/all-custom-builds-grid/AllCustomBuildsGrid';
import './customBuilds.scss';

function CustomBuilds() {
  return (
    <div className='custom-builds'>
      <div className='dashboard__header'>
        <h1>Custom Build Requests</h1>
      </div>
      <div className="dashboard__section">
        <h2 className='dashboard__section-title'>New Custom Build Inquiries</h2>
        <NewCustomBuildsGrid />
      </div>
      <div className="dashboard__section">
        <h2 className='dashboard__section-title'>All Custom Build Inquiries</h2>
        <AllCustomBuildsGrid />
      </div>
    </div>
  )
}

export default CustomBuilds;