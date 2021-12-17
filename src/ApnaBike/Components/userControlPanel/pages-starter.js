import React from "react"
import Breadcrumbs from "./Breadcrumb";
import Dashboard from "./Dashboard";
import UserHeader from "./Header";
import Sidebar from "./Sidebar";
import './_vertical.scss';

// import Breadcrumbs from "../../components/Common/Breadcrumb"


const PagesStarter = (props) => {
  return (
    <React.Fragment>
      <div className="page-content" style={{ marginLeft: '270px', marginTop: '-20px' }}>
        <Breadcrumbs title="Danish" breadcrumbItem="Dashboard" />
        <Dashboard />
      </div>

    </React.Fragment>
  )
}

export default PagesStarter
