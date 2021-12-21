import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../../container/Breadcrumb'
import BlogContent from './container/BlogContent/BlogContent'
import BlogHeader from './container/BlogHeader/BlogHeader'

const Blogs = () => {
    const { search } = useLocation();
    const allQueryParam = new URLSearchParams(search)
    const archive = allQueryParam.get('archive');
    const category = allQueryParam.get('category');

    const [blog] = useState({
        id: 1,
        title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
        cover_url: "https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg",
        tag: {
            name: "Vegetable",
            link: "/"
        },
        avatar: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
        author: "Rijen Manandhar",
        published_date: "15. 6. 2020"
    });

    return (
        <div className='blogs-search'>
            <Breadcrumbs />
            <div className='blog-search-header section-margin'>
                <BlogHeader
                    blog={blog}
                    search={search}
                    archive={archive}
                    category={category}
                />
            </div>
            <div className='blog-search-content section-margin'>
                <BlogContent/>
            </div>
        </div>
    )
}

export default Blogs
