import React, { useEffect } from 'react'
import Breadcrumbs from '../../container/Breadcrumb'
import BlogDetailHeader from './container/BlogDetailHeader/BlogDetailHeader';

import './BlogDetail.scss';
import BlogDetailContent from './container/BlogDetailContent/BlogDetailContent';
import RelatedBlogs from './container/RelatedBlogs/RelatedBlogs';

const BlogDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 210)
    }, [])
    return (
        <div className='blog-details'>
            <Breadcrumbs
                title="Apple"
            />
            <div className='section-margin blog-detail-header'>
                <BlogDetailHeader />
            </div>
            <div className='section-margin d-flex justify-content-center blog-detail-content'>
                <BlogDetailContent />
            </div>
            <div className='section-padding related-blogs mt-5'>
                <RelatedBlogs />
            </div>
        </div>
    )
}

export default BlogDetail
