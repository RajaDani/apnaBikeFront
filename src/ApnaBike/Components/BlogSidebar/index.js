import React from 'react';
import { Link } from 'react-router-dom'


import './style.css'

const BlogSidebar = () => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="col col-lg-4 col-12">
            <div className="wpo-blog-sidebar">
                <div className="widget category-widget">
                    <h3>Details</h3>
                    <div>
                        <h4>Pick Up</h4>
                        <p>22/10/2021</p>
                    </div>
                    <div>
                        <h4>Pick Up</h4>
                        <p>22/10/2021</p>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
