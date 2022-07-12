import RecentBuildsGrid from '../recent-builds-grid/RecentBuildsGrid';
import './dashboardGrid.scss';

function DashboardGrid() {
  return (
    <div className='dashboard-grid'>
      <div className='dashboard-grid__header'>
        <h1>VAV Customs</h1>
      </div>
      <div className="dashboard-grid__section">
        <h2 className='dashboard-grid__section-title'>Recent Custom Build Inquiries</h2>
        <RecentBuildsGrid />
      </div>
      <div className="dashboard-grid__section">
        <h2 className='dashboard-grid__section-title'>Recent Blog Entries</h2>
      </div>
    </div>
  )
}

export default DashboardGrid;