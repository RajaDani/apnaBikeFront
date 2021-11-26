import React from 'react';
import './scrollbar.scss'
import $ from 'jquery'

const Scrollbar = () => {

    $(document).ready(function () {
        $(".smothscroll").click(function () {
            $("html").animate({ scrollTop: 0 }, 1000);
        });
    });

    return (
        <div className="col-lg-12 ">
            <div className="header-menu">
                <ul className="smothscroll">
                    <li><i className="fa fa-arrow-up"></i></li>
                </ul>
            </div>
        </div>

    )
}

export default Scrollbar;
