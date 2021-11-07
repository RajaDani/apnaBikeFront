import React from 'react';
import { Link } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar';
import './style.css'

const BlogSingle = () => {

    return (
        <section className="wpo-blog-single-section section-padding p-5">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-wpo-blog-content clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src="bg4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar />
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
