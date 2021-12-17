import React from 'react'
import UserHeader from "./Header"
import Sidebar from "./Sidebar"
import PagesStarter from './pages-starter';

import './_vertical.scss';
import './_variables.scss';
import './_general.scss';
import './_topbar.scss';
// import './_horizontal-nav.scss';

export default function MainPage() {

    return (
        <div className="userPanel">
            <UserHeader />
            <Sidebar />
            <PagesStarter />
        </div>
    )
}
