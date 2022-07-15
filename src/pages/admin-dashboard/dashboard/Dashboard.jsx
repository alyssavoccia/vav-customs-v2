import { Link } from 'react-router-dom';
import RecentBuildsGrid from '../../../components/admin-dashboard/recent-builds-grid/RecentBuildsGrid';
import './dashboard.scss';

function Dashboard() {
  return (
  <div className='dashboard'>
    <div className='dashboard__header'>
      <h1>VAV Customs</h1>
    </div>
    <div className="dashboard__section">
      <h2 className='dashboard__section-title'>Recent Custom Build Inquiries</h2>
      <RecentBuildsGrid />
      <Link className='btn btn-primary' to='/admin/custom-builds'>View all inquires</Link>
    </div>
    <div className="dashboard__section">
      <h2 className='dashboard__section-title'>Recent Blog Entries</h2>
    </div>
  </div>
  )
}

export default Dashboard;